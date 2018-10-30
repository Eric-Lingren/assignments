
var ask = require('readline-sync');

////////////////////////////////////
//  PLAYERS AND ENEMIES CONSTRUCTIORS

// Creates Player
function Player(hp){
    this.hp = hp;
    // Attack for a random amount
    this.attack = function() {
        // returns a random number between 30 - 50
        return Math.floor(Math.random() * (50 - 30) + 30)
    }
    this.inventory = ['shoes',];
}

//  Creates Enemy
function Enemy(name, hp){
    this.name = name;
    this.hp = hp;
    // Attack for a random amount
    this.attack = function() {
        // returns a random number between 5 - 15
        return Math.floor(Math.random() * (15 - 5) + 5)
    }
    // this.pushToEnemyList = function(){
    //     enemyList.push(this);
    // }
    // this.pushToEnemyList();
}

// ///////////////////////////////////////////

//  GLOBAL VARIABLES
var player1 = new Player(100);
var playerChoiceOptions = ['Walk', 'Run' , 'Check Inventory', 'other stuff'];
//var enemyList = [];
var cyclops = new Enemy('Cyclops', 60);
var ghost = new Enemy('Ghost', 50);

console.log(cyclops);
console.log(ghost);
//console.log(` The full list of enemies is ${enemyList}` );

//////////////////////////////////////////

// GAME FUNCTIONS

// running from a fight
// (each time you run HP will drop by 1, but you have a 50% better chance of avoiding enemies)
// fighting
// enemy creation
// attacking enemy
// enemy attacking
// enemy dying (including dropping an item)
// character dying

// Walking
function walk(){
    console.log("you walked!")
    // Generates a 1 in 4 change for a random enemy
    var generateEnemy = Math.floor(Math.random() * 4);
    // What to do if enemy is generated
    console.log(`Random enemy chance is ${generateEnemy}`);
        if (generateEnemy === 0) {
            console.log(`you met an enemy`)
        } else {
            console.log(`no enemy met`);
        }
}

// Running
function run(){
    player1.hp -= 2;
    console.log(`You Ran and loose -2 HP.  Your HP is now at: ${player1.hp} `)
}

//////////////////////////////////////////

// GAME PLAY

console.log(`\n \nGreetings Player 1. You have entered the world of Noxo.  \n` );

player1.name = ask.question('Enter your name to begin your quest! \n \n');

console.log(`Welcome ${player1.name}! \n \n Noxo is a land of mystery. \n 
Here are some pointers to help get you started: \n 
-- Each time you walk, there is a chance you may encounter an enemy. \n
-- Each time you run, HP will drop by 2, but you have a 50% better chance of avoiding enemies.` );

//// CONSOLE.LOG PLAYERS STATS /////
console.log(player1);

// End game conditions:
    // Player dies
    // Player wins (whatever that is)
    // Player has option to quit at anytime

    // While the player is alive
    while(player1.hp > 0){
        // play the game
        var userChoice = ask.keyInSelect(playerChoiceOptions, "What would you like to do? ")
        // If the user choose to walk
        if(userChoice === 0){
            walk() 
        // Cancel option.  Ends the Game.
        } else if (userChoice === 1){
            run();

        } else if (userChoice === -1) {
            player1.hp = 0
        }

    }
    





