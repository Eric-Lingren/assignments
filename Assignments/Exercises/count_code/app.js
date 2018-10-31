

//  Write a function that returns the number of times that the string "code" appears anywhere 
//  in the given string, except we'll accept any letter for "d", so "cope" and "cooe" would also count.

//  Return how many times the word code appears in a string.
//  Return the count, including any substitutions for the letter "d".

function countCode(string) {  
  var counter = string.includes('code');
  console.log(counter);
}

countCode("aaacodebbb") // returns 1
countCode("codexxcode") // returns 2
countCode("cozexxcope") // returns 2



