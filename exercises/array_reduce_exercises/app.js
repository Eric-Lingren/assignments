// Use the built-in .reduce() method on arrays to solve all of these problems

// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    let sum  = arr.reduce(function(a,b){
        return a + b;
    });
    console.log(sum)
}

total([1,2,3]) // 6