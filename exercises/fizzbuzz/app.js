var finalArray = []

function oneHundredArray (){
    for (i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            finalArray.push('fizzbuzz');
        } else if (i % 5 === 0) {
            finalArray.push('buzz');
        } else if (i % 3 === 0) {
            finalArray.push('fizz');
        } else {
            finalArray.push(i);
        }
    console.log(finalArray);
    }
};

oneHundredArray()