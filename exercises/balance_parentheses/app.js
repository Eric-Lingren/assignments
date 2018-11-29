// Given a string including parentheses, write a function that returns true if every opening parentheses has a closing parentheses.


function balanceParentheses(str){
    //console.log(str)
    let openCount = 0;
    let closeCount = 0;

    for (let i = 0; i < str.length; i++){
        if(str[i] === "("){
            openCount++
        } else if(str[i] === ")"){
            closeCount++
            if (closeCount > openCount){
                return false
            }
        }
    }
    //return {openCount, closeCount} 
    return openCount === closeCount
}

console.log(balanceParentheses("()()")) // Output: true
console.log(balanceParentheses("(())")) // Output:  true
console.log(balanceParentheses("()))")) // Output:  false