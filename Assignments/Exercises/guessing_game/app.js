


let randomNum = Math.floor(Math.random()*10);

function randomNumGen(){
    return randomNum;
    
}
  console.log(randomNumGen());


  function checkGuess(guess) {
    // Write your code here
    if (randomNum === guess){
        return 'Congrats! Youre right'
    } else if (guess < randomNum) {
        return 'Youre too low.  Try again!'
    } else {
        return 'Youre too high.  Try again!'
    }
  }

  console.log(checkGuess(5));