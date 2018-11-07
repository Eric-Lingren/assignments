

var ask = require("readline-sync");


var isDead = false;
var hasWon = false

while(!isDead && !hasWon){
  
    var options = ['pick flowers', 'shoot guns', 'fight bears'];
    var index = ask.keyInSelect(options, "What would you like to do today?: ");

      if(index === 0){
        console.log("You pick some flowers. You make a bouquet.");
        isDead = false;
      } else if (index === 1) {
        console.log("You shoot guns.");
        isDead = false;
      } else {
        isDead = true;
      }
    
}

console.log("You fought a bear and got beat up! Idiot.....");
