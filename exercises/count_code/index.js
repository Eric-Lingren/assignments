
//  Write a function that returns the number of times that the string "code" appears anywhere 
//  in the given string, except we'll accept any letter for "d", so "cope" and "cooe" would also count.

//  Return how many times the word code appears in a string.
//  Return the count, including any substitutions for the letter "d".

function countCode(string) {  
  var counter = string.includes('code');
  // return counter
var n = string.search('code');
  return n
  
}

console.log(countCode("aaacodebbb"))// returns 1
console.log(countCode("codexxcode")) // returns 2
console.log(countCode("cozexxcope")) // returns 2


// function countCode(string) {  
  
//   if(typeof string !== 'string'){
//     return 'You must provide a string as an argument'
//   }

// }

// module.exports = countCode
