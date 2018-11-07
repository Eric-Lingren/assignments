
//Write a function that accepts two numbers as parameters, and returns the sum.

function sumTwoNumbers(num1 , num2){
    return num1 + num2;
}
console.log(sumTwoNumbers(3, 7));



//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function largestOfThreeNumbers(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
console.log(largestOfThreeNumbers(20,7,8))



//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. 
//(Return the string "even" or "odd");
function isEvenOrOdd(num1){
    if(num1 % 2 === 0){
        return num1 + ' is an even number.'
    } else {
        return num1 + ' is an odd number'
    }
}

console.log(isEvenOrOdd(7));



//Write a function that accepts a string as a parameter. 
//If the length of the string is less than or equal to twenty characters long, 
//return the string concatenated with itself (string + string). 
//If the string is more than twenty characters long, return the first half of the string.

function lessThan20Characters(string){
    if(string.length <= 19){
        return string + string
    } else {
        return string.substr(0,20);
    }
}
console.log(lessThan20Characters('this string is way too long to e less than 20 char'))


//   Optional Challenge

//Write a function that accepts a number ‘n’ as a parameter. 
//Then print the first ‘n’ Fibonacci numbers and return their sum.


/*

function fibNumbers(x){
    var fibArray = []
    if(x < 1){
        fibArray.push(0);
    } else if (x >=1 && x <= 2) {
        fibArray.push(0,1,1);
    } else if (x <= 3) {
        fibArray.push(0,1,1,2);
    } else {
        fibArray.push(fibNumbers(x - 1) + fibNumbers(x - 2));
        //return fibNumbers(x - 1) + fibNumbers(x - 2);
    }
    console.log(fibArray);
}

console.log(fibNumbers(4));
*/


//Write a function to solve the quadratic equation. 
//(It should accept three numbers as parameters, and then return an array with the resulting x values.)
// ax^2 + bx + c = 0


function quadraticSolver(a, b, c) {
    var negativeB = -b;
    var bSquared = b*b;
    var denominator = 2*a;
    var fourAc = 4*a*c;
    var rootThis = (bSquared - fourAc);
    var rootedNumber = Math.sqrt(rootThis);
    var numerator1 = negativeB + rootedNumber;
    var numerator2 = negativeB - rootedNumber;
    var answer1 = numerator1 / denominator;
    var answer2 = numerator2 / denominator;

    // console.log('negative b = ' + negativeB);
    // console.log('b squared = ' + bSquared);
    // console.log('the denominator is ' + denominator);
    // console.log('4 time a times c is ' + fourAc);
    // console.log('number to square root is ' + rootThis);
    // console.log('square rooted number is ' + rootedNumber);
    // console.log('the numerator1 is ' + numerator1);
    // console.log('the numerator2 is ' + numerator2);
    console.log('the answer 1 is ' + answer1);
    console.log('the answer 2 is ' + answer2);
    finalQuadraticAnswers.push(answer1);
    finalQuadraticAnswers.push(answer2);
}
var finalQuadraticAnswers = [];
quadraticSolver(2, -7, 6);
console.log(finalQuadraticAnswers);


//Write a function that accepts a string as a parameter. 
//Return the most frequently occuring letter in that string.

function mostOccuringLeter(someString){
    
}

mostOccuringLeter('');
