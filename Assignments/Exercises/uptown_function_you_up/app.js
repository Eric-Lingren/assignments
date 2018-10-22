
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
                lyricsArray.push(i);
            }
        }
        console.log(lyricsArray.join());
}

everyOtherWordString();