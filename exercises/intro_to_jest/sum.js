
function sum(a, b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'please provide 2 numbers'
    } else {
        return a + b
    }
    
}



module.exports = sum