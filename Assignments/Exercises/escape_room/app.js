

var ask = require('readline-sync');
var hasWon = false;
var isDead = false;
var hasKey = false;

while(!hasWon && !isDead){
    

    var choice = ['Put hand in hole', 'Find the key', 'Open the door'];
    var index = ask.keyInSelect(choice, 'What do you want to do?');
    
    function key(){
        hasKey = true;
    };

    if (index === 0 ){
        console.log('You put your hand in the hole of gloom.  You die. \n Game over.\n');
        isDead = true;
    } else if (index === 1){
        key();
        console.log('You have obtained the key.  It has been added to your inventory \n');
    } else {
        if (hasKey){
            console.log('You have the key and have opened the door! Winner!\n\n');
            hasWon = true;
        } else {
            console.log('Nice try, but you\'re not opening this door without a key buddy!\n');
        }
    }
};




