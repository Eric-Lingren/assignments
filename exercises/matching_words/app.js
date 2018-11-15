const inscription = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas"

let cleanString = inscription.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
let words = cleanString.split(' ')

//console.log(words)


function getFrequency(words){
    frequencies = {};
    let word = [];

        //  loop stores the count of each word int he string into the frequencies object
    for( let i = 0; i<words.length; i++ ) {
        word = words[i];
        frequencies[word] = frequencies[word] || 0;
        frequencies[word]++;
      }

        //  Turns the frequencies object into an array so we can sort it from high to low
      let sortable = [];
      for (var listWord in frequencies){
          sortable.push([listWord, frequencies[listWord]])
      }

      //  Pulls all the words that are repeated in the inscription into a new array called repeatedWords
      let repeatedWords = []
      //  Pulls all the words that are repeated and more than 3 letter into the array below
      let repeatedWords3PlusLetters = []
        //  iterates throught he sorted words array
      for (i = 0; i < sortable.length; i++){
            //  For each word that has a count of more than  1 ( or is repeated more than once) add it to the repeated words array
          if(sortable[i][1] > 1){
              repeatedWords.push(sortable[i])
              //console.log(sortable[i][0])
                //  Pulls the words apart into an array of letters
              let letters = sortable[i][0].split('')
              //console.log(letters)
                //  Counts the letters and adds that word to the 3 plus letters array if the count is greater than 2
                if (letters.length > 2){
                    repeatedWords3PlusLetters.push(sortable[i])
                    //console.log('repeated word hasmore than 2 lettes')
                }
                //console.log(repeatedWords3PlusLetters)
          }
      }
      //console.log(repeatedWords)
        //  Sorts the array from highest to lowest number
      let counts = sortable.sort(function(a, b){
          return b[1] - a[1];
      })

      //  Displays the top 5 most repeated words in the inscription along with the total count of how many time they appear.
      for (i = 0; i < 5; i++){
          //console.log(counts[i])
      }
}
getFrequency(words);

