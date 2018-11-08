


class Player {
    constructor (name, totalCoins, status, hasStar, gameActive){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive
    }
    setName(){
        var namesArray = ['Mario', 'Luigi'];
        var namePicked = namesArray[Math.floor(Math.random()*namesArray.length)];
        return namePicked;
    }
    gotHit(){
        if (this.status === 'Small'){
            return this.gameActive = false;
        } else if (this.status === 'Big'){
            return this.status = 'Small'
        } else if (this.status === 'Powered Up'){
            return this.status = 'Big'
        }
    }
    gotPowerup(){
        if (this.status === 'Small'){
            return this.status = 'Big';
        } else if (this.status === 'Big'){
            return this.status = 'Powered Up'
        } else if (this.status === 'Powered Up'){
            return this.hasStar = true
        }
    }
    addCoin(){
        this.totalCoins += 1;
        console.log(this.totalCoins);
        return this.totalCoins;
    }
    print(){
        console.log(`Name: ${this.name}`);
        console.log(`Total Coins: ${this.totalCoins}`);
        console.log(`Status: ${this.status}`);
        console.log(`Star Power: ${this.hasStar}`);
    }
}



var player1 = new Player ('Mario', 0, 'Small', false, true);

function getRandomNumber(min, max){
    let integer =  Math.floor(Math.random() * 3);
    player1.print()
    if (integer === 0){
     player1.gotHit();
    }else if (integer === 1) {
        player1.gotPowerup();
    } else if (integer === 2){
     player1.addCoin();
    }
}

setInterval(getRandomNumber, 2000);


console.log();