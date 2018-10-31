
/*

NEED TO DO:
ADD RANDOM MATH FOR WALK AWAY FROM ENEMIES
FINISH ADDING INVENTORY ITEMS TO EQUIPED
ADD BATTLE MULTIPLIERS FOR EQUIPED ITEMS TO BATTLES

*/




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
    this.inventory = [ {
            name:  'Shoes ',
            attackBonus: 0,
            defenseBonus: 0,
            escapeBonus: 1,
            }, {
            name:  'Fists',
            attackBonus: 1,
            defenseBonus: 0,  
            escapeBonus: 0,
            }
            ];
    this.equiped = [];
}

//  Creates Enemy
function Enemy(name, hp, isAlive){
    this.name = name;
    this.hp = hp;
    this.isAlive = isAlive;
    // Attack for a random amount
    this.attack = function() {
        // returns a random number between 5 - 15
        return Math.floor(Math.random() * (15 - 5) + 5)
    }
}

// ///////////////////////////////////////////

//  GLOBAL VARIABLES
var player1 = new Player(100);
var playerChoiceOptions = ['Walk', 'Run' , 'Attack', 'Check Inventory', 'My Stats', ];
var inventorySelector = [];
var playerInventoryOptions = [];

var enemyDrops = [ {
                name:  'a Sword',
                attackBonus: 3,
                defenseBonus: 2,
                escapeBonus: 0,
                }, {
                name:  'a Shield',
                attackBonus: 0,
                defenseBonus: 6,  
                escapeBonus: 0,
                }, {
                name:  'a Spear',
                attackBonus: 4,
                defenseBonus: 1,  
                escapeBonus: 0,
                },{
                name:  'Hiking Boots',
                attackBonus: 0,
                defenseBonus: 0,  
                escapeBonus: 2,
                }, {
                name:  'Brass Knuckles',
                attackBonus: 2,
                defenseBonus: 0,  
                escapeBonus: 0,
                }
            ];




//  ['Sword', 'Shield', 'Spear', 'Hiking Boots', 'Brass Knuckles', ];




//////////////////////////////////////////

// GAME FUNCTIONS

// fighting
// enemy creation
// attacking enemy
// enemy attacking
// enemy dying (including dropping an item)
// character dying


//  Check Player Stats
function checkStats(){
    console.log(`Here are your stats: \n
    Name: ${player1.name}  Current Health: ${player1.hp} HP \n
    Equiped with: ${player1.equiped}`)
}

// Walking
function walk(){
    console.log("You chose to walk.")
    // Generates a 1 in 4 change for a random enemy
    var generateEnemy = Math.floor(Math.random() * 4);
    // Enemy is generated.  
    //console.log(`Random enemy chance is ${generateEnemy}`);
        if (generateEnemy === 0) {
            console.log(`You met an enemy!`)
            meet();

        } else {
    // NO Enemie generated.  Continue Playing.
            console.log(`You did not encounter an enemy.  Continue along your quest.`);
        }
}

// Running
function run(){
    player1.hp -= 2;
    console.log(`You chose to run and loose 2 HP.  Your HP is now at: ${player1.hp} `)
};


//  Check Inventory
function checkInventory(){
    
    player1.inventory.forEach(function(item){
        if (playerInventoryOptions.indexOf(item.name) === -1) {
            playerInventoryOptions.push(item.name);
        }
    });
    
    ///   Displays the sub-menu for inventory items
    var isLooking = true;
    while( isLooking === true) {
    var inventoryChoice = ask.keyInSelect(playerInventoryOptions, "Would you like to examine an item more closely? \n")

    // Adds the selected item to the global inventory selector variable.
    var inventorySelector = playerInventoryOptions[inventoryChoice];    
    
    console.log(inventorySelector);   
    //  Displays Item in Inventory Slot 0
        if (inventoryChoice === 0) {
            console.log(`${player1.inventory[0].name}: \b
            Attack Bonus: ${player1.inventory[0].attackBonus} \b
            Defense Bonus: ${player1.inventory[0].defenseBonus} \b
            Escape Bonus: ${player1.inventory[0].escapeBonus}`);
            equip()
    //  Displays Item in Inventory Slot 0
        } else if (inventoryChoice === 1) {
            console.log(`${player1.inventory[1].name}: \b
            Attack Bonus: ${player1.inventory[1].attackBonus} \b
            Defense Bonus: ${player1.inventory[1].defenseBonus} \b
            Escape Bonus: ${player1.inventory[1].escapeBonus}`);
            equip()
        } else if (inventoryChoice === 2) {
            console.log(`${player1.inventory[2].name}: \b
            Attack Bonus: ${player1.inventory[2].attackBonus} \b
            Defense Bonus: ${player1.inventory[2].defenseBonus} \b
            Escape Bonus: ${player1.inventory[2].escapeBonus}`);
        } else if (inventoryChoice === -1) {
            isLooking = false;
        }
    }
};

function equip(){

    if (ask.keyInYN('Do you want to equip this item?')) {
        //player1.equiped.forEach(function(item){
            //if (player1.equiped.indexOf(item.name) === -1) {
                player1.equiped.push(inventorySelector);
                console.log('Great. This item has been equiped.')
            //} else {
            //    console.log(`You have already equiped this item.  Look under your stats.`)
           // }
       // });
        
    } else {
        console.log('This item has been returned to your inventory')
    }
}

//   Meeting Enemies 
function meet(){
    //  Creates all enemies
    var cyclops = new Enemy('Cyclops', 60, true);
    var ghost = new Enemy('Ghost', 40, true);
    //  Pulls random enemy
    var enemies = [cyclops.name, ghost.name];
    var randomEnemy = enemies[Math.floor(enemies.length * Math.random())];

    console.log(` The enemy you encountered is ${randomEnemy}! \n`)

        if (randomEnemy === 'Ghost') {
            console.log(` ${ghost.name} has hp of ${ghost.hp} and does an attack under 15 damage. \n
            You can either WALK, RUN, or FIGHT.  Maybe you have something useful in your inventory...?`)
            encounter(ghost);

        } else if (randomEnemy === 'Cyclops') {
            console.log(`${cyclops.name} has hp of ${cyclops.hp} and does an attack under 15 damage. \n
            You can either WALK, RUN, or FIGHT.  Maybe you have something useful in your inventory...? `)
            encounter(cyclops);
        } 
};

//  Encountering and Interacting with Enemies
function encounter(enemy){
    while (enemy.isAlive === true){
        var userChoice = ask.keyInSelect(playerChoiceOptions, "What would you like to do? \n")
        
        // If the user choose to walk away from enemy
        if(userChoice === 0){
        //  Player has a 1 in 10 chance of walking away.
            console.log(`You chose to walk away.  \n Most enemies are too fast to walk away from, but I guess you wanted to take your chances.`)
        
        //  Player tries to run.  They have a 33% chance of getting away.
        } else if (userChoice === 1){
            console.log(`You are trying to run away from ${enemy.name}`);
            var runAwayProbability = Math.floor(Math.random() * 3);
            //console.log(`Run probability is: ${runAwayProbability}`);
            run();
                /// If player excapes Enemy
                if (runAwayProbability === 0) {
                    console.log(`Nice job!  You were able to escape ${enemy.name}!`)
                    enemy.isAlive = false;

                ///  If player wasnt able to run away, they get attacked
                } else {
                    var thisEnemyAttack = enemy.attack();
                    player1.hp = player1.hp - thisEnemyAttack;
                    console.log(`Unfortunately You couldnt get away from ${enemy.name} this time... \n
                    ${enemy.name} was able to attack you while you were trying to flee! \n
                    You were dealt ${thisEnemyAttack} damage.  Your health is now at ${player1.hp}.`)
                }

        } else if (userChoice === 2){
            ///  Attack Sequence
                console.log(`You have chosen to attack`);
                //  Player attacks Enemy
                var thisPlayerAttack = player1.attack();
                console.log(`You dealt ${thisPlayerAttack} damage to ${enemy.name}!`);
                enemy.hp = enemy.hp - thisPlayerAttack;
                // Enemy Attacks Player
                var thisEnemyAttack = enemy.attack();
                player1.hp = player1.hp - thisEnemyAttack;
                console.log(`But ${enemy.name} also dealt you ${thisEnemyAttack} damage in the fight!  Your HP is now ${player1.hp}.`);
                    //  Enemy is still alive
                    if (player1.hp < 1 ){
                        console.log(`Sadly you have been killed by ${enemy.name}.  \n 
                        While you are slowly dying a painfull death, your body gets looted. \n
                        GAME OVER`);
                        enemy.isAlive = false;


                    } else if (enemy.hp > 0) {
                        console.log(`${enemy.name} is still alive.  Their HP is now ${enemy.hp}`);
                    
                    //  Enemy is dead
                    } else {
                        console.log(`${enemy.name} has been killed.  Congratulations!!`);
                        var thisdrop = dropItem();
                        console.log(`They have dropped ${thisdrop.name}.  It has been added to your inventory.`)
                        enemy.isAlive = false;
                    
            }
        } else if (userChoice === 3){
            console.log(`Here are the items in your inventory: \n
            ${player1.inventory}`);

        } else if (userChoice === 4 ){
            checkStats();
            
            // Cancel option.  Ends the Game.
        } else if (userChoice === -1) {
            console.log(`${player1.name}, you have chosen to abandon your adventure.  Goodbye. \n`)
            enemy.isAlive = false;
        }
    }
}



//  Enemy Item Drop

function dropItem(){
    var dropped =  enemyDrops[Math.floor(Math.random() * enemyDrops.length)];
    player1.inventory.push(dropped);
    return dropped
}


//////////////////////////////////////////

// GAME PLAY

console.log(`\n \nGreetings Player 1. You have entered the world of Noxo.  \n` );

player1.name = ask.question('Enter your name to begin your quest! \n \n');

console.log(`Welcome ${player1.name}! \n \n Noxo is a land of mystery. \n 
Here are some pointers to help get you started: \n 
-- Each time you walk there is a chance you may encounter an enemy. \n
-- Each time you run your hit points will drop by 2, but this gives you a greater chance of avoiding enemies. \n
-- You start the game with several items in your inventory. \n
-- If you fight an enemy and win they may drop an item that may be useful later on. \n
-- You can check your stats at anytime. \n` );

//// CONSOLE.LOG PLAYERS STATS /////
//console.log(player1);

// End game conditions:
    // Player dies
    // Player wins (whatever that is)
    // Player has option to quit at anytime

    // While the player is alive
    while(player1.hp > 0){
        // play the game
        var userChoice = ask.keyInSelect(playerChoiceOptions, "What would you like to do? \n")
        // If the user choose to walk
        if(userChoice === 0){
            walk() 
        //  If the user chooses to Run
        } else if (userChoice === 1){
            run();

        } else if (userChoice === 2){
            ///  Attack Sequence
            console.log(`There is nothing to attack right now.`)
            
            // Checks Players Inventory
        } else if (userChoice === 3){
            console.log(`Here are the items in your inventory: \n`)
            checkInventory();

            //  Checks Players Stats
        } else if (userChoice === 4 ){
            checkStats();

        // Cancel option.  Ends the Game.
        } else if (userChoice === -1) {
            console.log(`${player1.name}, you have chosen to abandon your adventure.  Goodbye. \n`)
            player1.hp = 0
        } 
    }
    





