


function name1(word1, word2) {
    var wordConcat = word1.concat(word2);
    return wordLowercase = wordConcat.toLowerCase();
}

function name2(word1, word2) {
    var oIndex = word1.indexOf('o');
    var wordUpperCase = word2.toUpperCase();
    return oIndex + wordUpperCase
}

function name3(word1) {
    var lastIndex = word1.lastIndexOf('s');
    console.log(lastIndex);
    var letterMatch = word1.match(/is/g);
    console.log(letterMatch);
}

function name4(word1) {
    var middleName = word1.slice(5,13);
    console.log(middleName);
    var newFullName = word1.replace('Hancock',"William");
    console.log(newFullName);
}

function name5(word1) {
    var splitString = word1.split(" ");
    console.log(splitString);
    var subStringVar = word1.substring(5,13);
    console.log(subStringVar);
}

console.log(name1('Hello','World'));
console.log(name2('Hello','World'));
name3('Hello World this is his longer string');
name4('John Hancock Doe');
name5('here is a short phrase');



