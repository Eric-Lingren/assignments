
/*

NEED TO DO:
DISPLAY FREE SLOTS FOR EQUIPED ITEMS
MAKE IT SO THEY CAN ONLY EQUIP ONE ITEM IN EACH SLOT
ADD DEFENSE BONUS TO FIGHTS
ADD ESCAPE BONUS TO RUNNING AND WALKING AWAY FROM ENEMIES
Check out sleep and emojis


*/

var ask = require('readline-sync');

var player = require('play-sound')(opts = {});

// Sets variable to play music on game start
var enterAudio = player.play('./Royal_Entrance.mp3', function(err){
    if (err && !err.killed) throw err
  })

 //play music for enemy battle
 var battleAudio;
function battleAudio() {

battleAudio = player.play('./battle.mp3', function(err){
    if (err && !err.killed) throw err
  });

}


 //play music for achievement
 var achievementAudio;
function achievementAudio() {

battleAudio = player.play('./achievement.mp3', function(err){
    if (err && !err.killed) throw err
  });

}

// battleAudio()
  //battleAudio.kill();



////////////////////////////////////
//  PLAYERS AND ENEMIES CONSTRUCTIORS

// Creates Player
function Player(hp){
    this.hp = hp;
    // Attack for a random amount
   // this.attack = attack();
    this.inventory = [ {
        name:  'Morphine',
        attackBonus: 0,
        defenseBonus: 0,
        escapeBonus: 0,
        heal: 10,
        }, 
    ];
    this.equiped = [{
        name:  'Fists',
        attackBonus: 1,
        defenseBonus: 0,  
        escapeBonus: 0,
        }, {
        name:  'Shoes',
        attackBonus: 0,
        defenseBonus: 0,
        escapeBonus: 1,
        },
    ];
    this.bonus = []
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
                name:  'Sword',
                attackBonus: 3,
                defenseBonus: 2,
                escapeBonus: 0,
                }, {
                name:  'Shield',
                attackBonus: 0,
                defenseBonus: 6,  
                escapeBonus: 0,
                }, {
                name:  'Spear',
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
    Name: ${player1.name}    Current Health: ${player1.hp}  \n `)
    //  Outputs the name of each item equiped
    console.log(`You have equiped:`)
    player1.equiped.forEach(function(item){
       console.log(` ${item.name}`)
});
bonus();

  
enterAudio.kill();



  
}
 


// Walking
function walk(){
    
    console.log("You chose to walk.")
   
    // Generates a 1 in 4 change for a random enemy
    var generateEnemy = Math.floor(Math.random() * 4);
    // Enemy is generated.  
    //console.log(`Random enemy chance is ${generateEnemy}`);
        if (generateEnemy === 0) {
           // Generate battle music
           battleAudio()
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
    //  Displays the name of current inventory items
    player1.inventory.forEach(function(item){
        if (playerInventoryOptions.indexOf(item.name) === -1) {
            playerInventoryOptions.push(item.name);
        }
    });
    
    ///   Displays the sub-menu for examining item more closely.
    var isLooking = true;
    while( isLooking === true) {
    var inventoryChoice = ask.keyInSelect(playerInventoryOptions, "Which item would you like to examine an item more closely? \n")

    // Adds the selected item to the global inventory selector variable.   
    var inventorySelector = player1.inventory[inventoryChoice];
   
    //  Displays Item in Inventory Slot 0
        if (inventoryChoice === 0) {
            console.log(`\n ${player1.inventory[0].name}: \b
            Attack Bonus: ${player1.inventory[0].attackBonus} \b
            Defense Bonus: ${player1.inventory[0].defenseBonus} \b
            Escape Bonus: ${player1.inventory[0].escapeBonus} \b
            Heal: ${player1.inventory[0].heal} \n`);
            equip(inventorySelector)
    //  Displays Item in Inventory Slot 0
        } else if (inventoryChoice === 1) {
            console.log(`${player1.inventory[1].name}: \b
            Attack Bonus: ${player1.inventory[1].attackBonus} \b
            Defense Bonus: ${player1.inventory[1].defenseBonus} \b
            Escape Bonus: ${player1.inventory[1].escapeBonus}`);
            equip(inventorySelector)
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

function equip(inventorySelector){
    // When player is looking at a specific item in the inventory...  Do they want to equip item?
    if (ask.keyInYN('Do you want to equip this item?')) {
        // checks to see if item has already been equiped.  

        var objectAlreadyEquiped = player1.equiped.find(function (item){
            return item === inventorySelector
        });

        if (objectAlreadyEquiped === undefined){
            //  If not alread equiped, it alows them to equip.
            player1.equiped.push(inventorySelector);
            console.log('Great. This item has been equiped.')

            //  If the item has previously been equiped:
        } else {
            console.log(`You have already equiped this item.  Look under your stats.`)
        }
    } else {
        console.log('Ok.  This item has been returned to your inventory.')
    }; 

};


//   Meeting Enemies 
function meet(){
    //  Creates all enemies

    var cyclops = new Enemy('Cyclops', 60, true);
    var ghost = new Enemy('Ghost', 40, true);
    //  Pulls random enemy
    var enemies = [cyclops.name, ghost.name];
    var randomEnemy = enemies[Math.floor(enemies.length * Math.random())];

    console.log(` The enemy you encountered is ${randomEnemy}! \n`)
        //  If they meet ghost
        if (randomEnemy === 'Ghost') {
            console.log(` ${ghost.name} has hp of ${ghost.hp} and does an attack under 15 damage. \n
            You can either WALK, RUN, or FIGHT.  Maybe you have something useful in your inventory...?`)
            encounter(ghost);

        //  If they meet Cyclops
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
            console.log(`You chose to walk away from ${enemy.name}.  \n Most enemies are too fast to walk away from, but I guess you wanted to take your chances.`)
            
            //  Player has a 1 in 10 chance of walking away.
            var walkAwayProbability = Math.floor(Math.random() * 10);
            //console.log(`walk away probability is: ${walkAwayProbability}`);

            /// If player excapes Enemy
                if (walkAwayProbability === 0) {
                    
                    console.log(`Nice job!  You were able to escape ${enemy.name}!`)
                    enemy.isAlive = false;

                ///  If player wasnt able to walk away, they get attacked:
                } else {
                    // Generates players defense bonus
                    defense();
                    // Generates a random number for enemy attack
                    var attackOutcome = enemy.attack();
                    // Total damage to player from attack:
                    var thisEnemyAttack = attackOutcome - defenseOutcome;
                    //  Result of the attack:
                    player1.hp = player1.hp - thisEnemyAttack;
                    console.log(`Unfortunately You couldnt get away from ${enemy.name} this time... \n
                    ${enemy.name} was able to attack you while you were trying to flee! \n
                    You were dealt ${thisEnemyAttack} damage.  Your health is now at ${player1.hp}.`)
                }

        //  Player tries to run.  They have a 33% chance of getting away.
        } else if (userChoice === 1){
            console.log(`You are trying to run away from ${enemy.name}`);
            var runAwayProbability = Math.floor(Math.random() * 3);
            //console.log(`Run probability is: ${runAwayProbability}`);
            run();
                /// If player excapes Enemy
                if (runAwayProbability === 0) {
                    //ends enemy battle music
                    battleAudio.kill()
                    console.log(`Nice job!  You were able to escape ${enemy.name}!`)
                    enemy.isAlive = false;

                ///  If player wasnt able to run away, they get attacked
                } else {
                    // Generates players defense bonus
                    defense();
                    // Generates a random number for enemy attack
                    var attackOutcome = enemy.attack();
                    // Total damage to player from attack:
                    var thisEnemyAttack = attackOutcome - defenseOutcome;
                    //  Result of the attack:
                    player1.hp = player1.hp - thisEnemyAttack;
                    console.log(`Unfortunately You couldnt get away from ${enemy.name} this time... \n
                    ${enemy.name} was able to attack you while you were trying to flee! \n
                    You were dealt ${thisEnemyAttack} damage.  Your health is now at ${player1.hp}.`)
                }

        } else if (userChoice === 2){
            ///  Attack Sequence
                console.log(`You have chosen to attack`);
                //  Player attacks Enemy first
                var thisPlayerAttack = attack();
                console.log(`You dealt ${thisPlayerAttack} damage to ${enemy.name}!`);
                enemy.hp = enemy.hp - thisPlayerAttack;

                // Enemy Attacks Player second
                var thisEnemyAttack = enemy.attack();
                // Generates players defense bonus
                defense();
                // Generates a random number for enemy attack
                var attackOutcome = enemy.attack();
                // Total damage to player from attack:
                var thisEnemyAttack = attackOutcome - defenseOutcome;
                //  Result of the attack:
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
                        // end battle music
                        battleAudio.kill()
                        console.log(`${enemy.name} has been killed.  Congratulations!!`);
                        var thisdrop = dropItem();
                        console.log(`They have dropped ${thisdrop.name}.  It has been added to your inventory.`)
                        enemy.isAlive = false;
                        achievementAudio();
                    
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


//  Player attack bonus
function attackBonus(){
    //  Lists all atack multipliers
    var listAttackMultipliers = player1.equiped.map(a => a.attackBonus)
    //  Returns the sum of all attack multipliers
    listAttackMultipliers.reduce(function(a,b){
        attacksCombined = a+b
    });
    return attacksCombined
}
var attackMultiplier = attackBonus();


//  Attack v2.0
function attack(){
    // returns a random number between 30 - 50
    var baseAttack =  Math.floor(Math.random() * (30 - 15) + 15)
        //console.log (`Your base attack is ${baseAttack} `)

    //  Access the attack multiplier boune generated from attackBonus()
        //console.log(`\n${player1.name}'s current attack bonus is  + ${attackMultiplier}`);

    //  Random Base attack plus the attack bonus is the final attack total
    var finalAttackDamage = baseAttack + attackMultiplier;
        //console.log('final attack damage is ' + finalAttackDamage)
        return finalAttackDamage;
};


//  Players Defense Bonus Calculator
var defenseOutcome;
function defense(){

   //  Lists all defense multipliers
   var listDefenseMultipliers = player1.equiped.map(a => a.defenseBonus)
   //  Returns the sum of all defense multipliers
   var defenseMultiplier = listDefenseMultipliers.reduce(function(a,b){
       return a+b
   });
   console.log(`${defenseMultiplier}`);
   defenseOutcome = defenseMultiplier
     
}

//var dOutcome = defenseOutcome;


  



///  Player bonus calculator 

function bonus(){
   
    //  Lists all defense multipliers
    var listDefenseMultipliers = player1.equiped.map(a => a.defenseBonus)
    //  Returns the sum of all defense multipliers
    var defenseMultiplier = listDefenseMultipliers.reduce(function(a,b){
        return a+b
    });
    //  Lists all escape multipliers
    var listEscapeMultipliers = player1.equiped.map(a => a.escapeBonus)
    //  Returns the sum of all escape multipliers
    var escapeMultiplier = listEscapeMultipliers.reduce(function(a,b){
        return a+b
    });

    console.log(`\n${player1.name}'s current attack bonus is  + ${attackMultiplier}`);
    console.log(`${player1.name}'s current defense bonus is  + ${defenseMultiplier}`);
    console.log(`${player1.name}'s current escape bonus is  + ${escapeMultiplier}`);
    
}

///////////////////////////////////////////
//////////////////////////////////////////

// GAME PLAY

console.log(`\n \nGreetings Player 1. You have entered the world of Noxo.  \n` );

player1.name = ask.question('Enter your name to begin your quest! \n \n');

console.log(`Welcome ${player1.name}! \n \n Noxo is a land of mystery. \n 
Here are some pointers to help get you started: \n 
-- Each time you walk there is a chance you may encounter an enemy. \n
-- Each time you run your hit points will drop by 2, but this gives you a greater chance of avoiding enemies. \n
-- You start the game with several items in your inventory. \n
-- If you fight an enemy and win they may drop an item that could be useful later on. \n
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
    





