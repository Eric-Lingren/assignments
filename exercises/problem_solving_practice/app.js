

//Write a function that takes an array of numbers and returns the largest (without using Math.max())

//i.e.  largest([3, 5, 2, 8, 1]) // => 8

var array = [3, 5, 2, 8, 1];
var sortedArray = array.sort(function(a, b){return a - b});
console.log(sortedArray);
console.log(`${sortedArray[0]}`)

function largest(sortedArray){
    for(i = 0; i < sortedArray.length; i++){
        
    }
    console.log(`The smallest number is ${sortedArray[0]}`);
};

largest(sortedArray);

//Write a function that takes an array of words and a character and return each word that 
//has that letter present.
var x = ["#3", "$$$", "C%4!", "Hey!"];
//var z = x.join(' ');
var y = '!';
//console.log(z);

function lettersWithStrings(x, y){
    //var pattern = `/${y}/`
    for (i = 0; i < x.length; i++){
        if (x[i].match(/!/g)){
            console.log(x[i]);
        };
    };
};
lettersWithStrings(x, y)

// i.e.  lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]



//  Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2){
    if (num1 % num2 === 0){
        console.log('true');
    } else {
        console.log('false');
    }
}
isDivisible(15,4)

// i.e.  isDivisible(4, 2) // => true
// i.e.  isDivisible(9, 3) // => true
// i.e.  isDivisible(15, 4) // => false





