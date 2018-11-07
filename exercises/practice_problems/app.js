// Make a function that takes a string and returns that string reversed.
// Example

// Input: "Hello World"
// Output: "dlroW olleH"
let str = 'hello world';
function reverseString(str) {
    var splitString = str.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    var finalString = joinArray.toString();
    console.log(finalString);
};
reverseString(str);

// Make a function that takes a string and returns true if the string could be a number else return false.
// Example

// Input: "3"
// Output: true

// Input: "three"
// Output: false

let isNum = function(string) {
    let isString = (typeof string);
    if (isString === 'string'){
        return ('true');
    } else{
        return ('false');
    }
}

console.log(isNum(5));

// Make a function that takes a number and returns true if the number is even else return false.
// Example

// Input: 4
// Output: true

// Input: 3
// Output: false

let isEven = function(num2) {
    if (num2 % 2 === 0){
        console.log('true');
    } else {
        console.log('false.');
    }
}
isEven(2);

// Make a function that takes an array and returns the average of the array.
// Example

// Input: [1, 2, 3]
// Output: 2

// Input: [5, -10, 10, 20]
// Output: 6.25

var arrayToAdd = [5,20];
var sum = 0;

let averageArray = function(arrayToAdd) {
    for (i = 0; i < arrayToAdd.length; i++){
        sum += arrayToAdd[i]; 
    }
    var average = (sum / arrayToAdd.length);
    console.log(average);
}
averageArray(arrayToAdd);



// Make a function that takes two arrays and returns a single 
// array of the items from the arrays added alternatingly.
// Example

// Input: ["a", "b", "c"] and [1, 2, 3]
// Output: ["a", 1, "b", 2, "c", 3]

var arr1 = ['a', 'b', 'c'];
var arr2 = [1, 2, 3];
var arr3 = [];

let combineArrays = function(arr1, arr2) {
    for (i = 0; i < arr1.length; i++){
        arr3.push(arr1[i], arr2[i]);
    }
    console.log(arr3);
};

combineArrays(arr1, arr2);






