
var ask = require('readline-sync');

var num1 = ask.questionInt([`Please enter your first number: \n`]);
var num2 = ask.questionInt([`Please enter your second number:\n`]);

console.log(`Your numbers you selected are ${num1} and ${num2} \n \n`);

//var method = ask.question(`What would you like to do?  \n Please type ADD, SUBTRACT, MULTIPLY, or DIVIDE.\n`);
var opperators = ['Add', 'Subtract', 'Multiply', 'Divide']
var method1 = ask.keyInSelect(opperators, 'Which opperation?');


function add(){
    let addResult = num1 + num2;
    console.log(`Your anser is:  ${addResult}`);
};

function subtract(){
    let subtractResult = num1 - num2;
    console.log(`Your anser is:  ${subtractResult}`);
};

function multiply(){
    let multiplyResult = num1 * num2;
    console.log(`Your anser is:  ${multiplyResult}`);
};

function divide(){
    let divideResult = num1 / num2;
    console.log(`Your anser is:  ${divideResult}`);
};



if (method1 === 0){
    add();
} else if (method1 === 1){
    subtract()
} else if (method1 === 2){
    multiply()
} else if (method1 === 3){
    divide()
} else {
    console.log('You entered an invalid opperator.  Please Start Over.')
}


/*
var confirm = ask.keyInYN(`You wish to ${method} ${num1} and ${num2}.  Is this correct?`)

if (confirm ){
    console.log(`Great! Heres your answer!`)
} else {
    console.log(`You must suck at typing!  Lets try again...`)
}
*/



