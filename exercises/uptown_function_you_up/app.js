
var lyrics = ["This", "hit", "that", "ice", "cold", 
"Michelle", "Pfeiffer", "that", "white", 
"gold", "This", "one", "for", "them", 
"hood", "girls", "Them", "good", "girls", 
"straight", "masterpieces", "Stylin'", 
"whilen'", "livin'", "it", "up", "in", 
"the", "city", "Got", "Chucks", "on", 
"with", "Saint", "Laurent", "Gotta", "kiss", 
"myself", "I'm", "so", "pretty"];

// First function: Prints the contents of the array, lyrics, to the console as a string, 
// including necessary spaces.
var joinedLyrics = lyrics.join(' ');

function lyricsString(x){
    return (joinedLyrics);
};
//console.log(lyricsString(lyrics));


// Second function: Prints lyrics backwards ("pretty so I'm myself kiss Gotta...").

function reverseString(x){
    lyrics2 = lyrics.reverse();
    lyrics3 = lyrics2.join(' ');
    return lyrics3
}

//console.log(reverseString(lyrics));


//Third function: Prints every other word to the console, (e.g. "this that cold Pfeiffer...").
var lyricsArray = [];

function everyOtherWordString(x){
    lyricsReversed = lyrics.reverse();
        for (i = 0; i < lyricsReversed.length; i++){
            if (i % 2 === 0) {
                lyricsArray.push(lyricsReversed[i]);
            }
        }
        console.log(lyricsArray.join());
}

everyOtherWordString();



/*
// Write a function declaration named isEven that console logs "Its Even!" ehen called.

function isEven(){
    console.log(' Its Even!');
}

// Write a function expression named isOdd that console logs "Its Odd!" ehen called.

var isOdd = function() {
    console.log(' Its Odd!');
}

//  Write a function expression or declaratrion named checkNumbers that takes a single paramater 'aray'
//that is an array of numbers.  This function should loop through the arrayand should call its odd or its even.

numArray = [0,1,2,3,4,5,6,7,8,9,10]

function checkNumbers(numArray){
    for (i = 0; i < numArray.length; i++){
        if (numArray[i] % 2 === 0){
            isEven();
        } else {
            isOdd();
        }
    }
}

checkNumbers(numArray);

*/
