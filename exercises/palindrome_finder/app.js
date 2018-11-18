

function isPalindrome(str){
        //  lowercase
    let strLower = str.toLowerCase();
        //  remove whitespaces
    let strLowerCombined = strLower.replace(/ /g, '');
        // remove puncuation
    let noPuncuation = strLowerCombined.replace(/[!,?.]/g, '');

        // convert string to an array to before reverseing it
    let myArray = noPuncuation.split('');
        //  Reverse the array
    let reversed = myArray.reverse();
        // Join aray to string
    let strReverse = reversed.join('');

    if (noPuncuation === strReverse){
        return true
    } else{
        return false
    };
}
   


console.log(isPalindrome("Star Rats!"));  // true
console.log(isPalindrome("palindrome"));  // false
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true