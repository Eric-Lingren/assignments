

// Write a function that accepts a string as input.

var array2 = [];
//console.log(array1);

function stringInput(str1){
    for (i = 0; i < str1.length; i++){
        array2.push(str1[i]);
    };
    console.log(array2);
    //console.log(array1);
};

stringInput('hello world');

//  Write a loop to print out each letter of that string individually.
        // SEE LOOP ABOVE

//  Write a function that accepts a string and a single character as inputs. 
//  Write a loop that iterates over the string, and prints the position of the first 
//  occurrence of the specified character. If the character is not found, tell that to the user.

function nextFunction(str2, x){
    var indexOfX = str2.indexOf(x);
    console.log(indexOfX);
    if (indexOfX < 0 ) {
        console.log(`There is no letter ${x} in this string.`);
        
    } else {
        console.log(`The first position of ${x} is ${indexOfX}`);
    }
};

nextFunction('The quick brown fox jumped over the lazy dog.', 'd');



//  Write a function that accepts an array of numbers as a parameter. 
//  Quit the function when the number 42 is found. Let the user know if 42 is not found.

var array42 = [3,6,24,17,42,36,89];

function arrayLoop42(){
    for(i = 0; i < array42.length; i++) {
        var index42 = array42.indexOf(42);
    };
    if (index42 === -1) {
        console.log(`There is no number 42 in this array.`)
    } else if (index42) {
        console.log(`The location of number 42 is at index of ${index42}`);
    }
}; 

arrayLoop42();


//  Write a function that accepts 10 numbers in an array and then prints out the smallest 
//  number out of the ten without using Math.min()


var numberList10 = [3,4,5,6,7,8,9,10,1,2]

function smallestNumber (){
    
}



