
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var characters = ['!','@','#','$','%','^','&','*','(',')'];

var passwordRandomNum = [];
var passwordAlphabet = [];
var passwordCharacters = [];
var allPasswordOptions = [];
var allPasswordOptionsRandom = [];
var finalPasswordArray = [];
//var finalPassword = finalPasswordArray.join();

function randomPasswordGenerator(requestedPasswordLength){
    for (i = 0; i < requestedPasswordLength; i++){
        var passwordNum = (Math.floor(Math.random() * 10))  ;
        passwordRandomNum.push(passwordNum);

        var passwordLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        passwordAlphabet.push(passwordLetter);

        var passwordSymbols = characters[Math.floor(Math.random() * characters.length)];
        passwordCharacters.push(passwordSymbols);
    };
    allPasswordOptions = passwordRandomNum.concat(passwordAlphabet.concat(passwordCharacters));

    for (i = 0; i < allPasswordOptions.length; i++) {
        var randomItem = allPasswordOptions[Math.floor(Math.random() * allPasswordOptions.length)];
        allPasswordOptionsRandom.push(randomItem);
    };

    for (i = 0; i < requestedPasswordLength; i++) {
        finalPasswordArray.push(allPasswordOptionsRandom[i]);
    }

    
};

randomPasswordGenerator(6);

console.log(finalPasswordArray);
//console.log(finalPassword);


