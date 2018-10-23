
/* EXAMPLES:
var input = "bookkeeper larry";
No duplicates: "bokepr lay"
The Extras: "okeerr"
*/


//Create function that accepts a string.

var myString = 'bookkeeper larry'
var lettersOnly = 'bookkeeper larry'.split('');
var removedLetters =[];

function noDuplicates(x){
    for (i = 0; i < lettersOnly.length; i++){
        if (lettersOnly[i] === lettersOnly[i - 1]) {
            removedLetters.push(lettersOnly[i]);
        }
        console.log(removedLetters);
    }
    //console.log(lettersOnly);
}
noDuplicates(myString);



//Create variable that stores the string without duplicates.
var noDupString = [];

//Create a variable that stores the letters removed.
var removedLetters = [];

//Have the function return the string without duplicate letters
//Create another function that returns the letters removed.






