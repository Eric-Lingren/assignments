
/* EXAMPLES:
var input = "bookkeeper larry";
No duplicates: "bokepr lay"
The Extras: "okeerr"
*/


//Create function that accepts a string.

var myString = 'bookkeeper larry'
var lettersOnly = 'bookkeeper larry'.split('');
var removedLetters =[];
var noDupString = [];

function noDuplicates(x){
    for (i = 0; i < lettersOnly.length; i++){
        if (lettersOnly[i] === lettersOnly[i - 1]) {
            removedLetters.push(lettersOnly[i]);
        } else {
            noDupString.push(lettersOnly[i]);
            finalNoDupString = noDupString.join(' ');
        }
        console.log(finalNoDupString);
    }
    //console.log(lettersOnly);
}
noDuplicates(myString);
console.log(finalNoDupString)

//Create variable that stores the string without duplicates.


//Create a variable that stores the letters removed.
var removedLetters = [];

//Have the function return the string without duplicate letters
//Create another function that returns the letters removed.






