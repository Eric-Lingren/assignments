
var ask = require('readline-sync');
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(ask.question('How many letters would you like to shift? '));

var stringArray = input.split('');

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var index = [];

function caeserCipher(input, shift){
    console.log(input);
    console.log(shift);
    console.log(stringArray);
    console.log(alphabet);
    for(i = 0; i < stringArray.length; i++){
        for(j = 0; j < alphabet.length; j++){
            if (stringArray[i] === alphabet[j]) {
                index.push(i);
            }
        }
    }

}

console.log(caeserCipher(input, shift))
