
var ask = require('readline-sync');

var name = ask.question('whats your name?\n');
var nameUppercase = name.toUpperCase();
console.log(`hello ${nameUppercase}`);

var mood = ask.question('how are you doing today?\t');
console.log(`you are ${mood}`);

var moodLength = mood.length;
console.log(`your mood is ${moodLength} characters long`);

var age = ask.question('tell me your age');
nameAndAge = mood.concat(age);
console.log(`your mood and age combined is ${nameAndAge}`);

var about = ask.question('tell me a little more about yourself so i can get to know you');
var aboutFullLength = [];    
var aboutLastHalf = [];

for(i = 0; i < about.length; i++){
    aboutFullLength.push(about[i]);
};


if (about.length < 20) {
    console.log(`you told me about ${about}`);
} else {
    let halfStringLength = (about.length/2);
    let longString = about.slice(halfStringLength);
    console.log(`\nyou spoke too much. I can only read 20 characters at a time. \nThe last half of what you said is ${longString}`)
};

var whatDoYouWantRepeated = ask.question(`Would you like me to start form somewhere else in your info?  Choose a number between 0 and ${about.length} :`);
var userStringRequest = about.slice(whatDoYouWantRepeated);

console.log(`Here you go: ${userStringRequest}`)


