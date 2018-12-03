import React from 'react'
import './css/play.css'
import DisplayACard from './DisplayACard'
import oneDollar from './css/images/$1.png';
import fiveDollar from './css/images/$5.png';
import twentyFiveDollar from './css/images/$25.png';
import fiftyDollar from './css/images/$50.png';
import hundredDollar from './css/images/$100.png';
import fiveHundredDollar from './css/images/$500.png';


const Play = (props) => {
const { dealHand, dealOneCard, dealerHandImages, playerHandImages, playerHandTotal, dealerHandTotal, playerStands, playerDoubles, playerDoubleBet, playerSplits, playerBet, playerBankroll, bet1, bet5, bet25, bet50, bet100, bet500, playerClickedStand, playerClickedDouble, dealerWins, playerWins, playerBust, dealerBust, clearBet, } = props;

    function tableStatus(){
        console.log('did dealer win: ' + dealerWins);
        console.log('did player bust: ' +  playerBust); 
        if((playerHandTotal && dealerWins) || (playerHandTotal && playerBust)){
            return <h1>Dealer Wins</h1>
        } else if( (playerHandTotal && playerWins) || (playerHandTotal && dealerBust) ){
            return <h1>Player Wins</h1>
        } else if(playerHandTotal && playerHandTotal === dealerHandTotal && playerClickedStand ){
            return <h1>Push</h1>
        } else { 
            return <h1>Dealer Stands on 17</h1>
        }
    }
    const stat = tableStatus()

    function doubleDown(){
        console.log('did player click double: ' + playerClickedDouble)
        if (playerClickedDouble){
            return playerDoubleBet
        }
    }
    const dbl = doubleDown()


    return (
        <div className='playContainer'>
            <div className='table'>
                <div className='dealerHand'>
                {dealerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}
                </div>
                <h2>Dealer Total: {dealerHandTotal}</h2>
                {
                    stat
                }
                
                <button onClick={dealHand} >Deal Hand</button>
                <button onClick={dealOneCard} >Hit</button>
                <button onClick={playerStands} > Stand </button>
                <button onClick={playerDoubles} > Double </button>
                <button onClick={playerSplits} > Split </button>
                <button onClick={clearBet} > Clear Bet </button>
                <h2>Player Total: {playerHandTotal} </h2>
                <img src={oneDollar} onClick={bet1} alt='chip' className='pokerChip'></img>
                <img src={fiveDollar} onClick={bet5} alt='chip' className='pokerChip'></img>
                <img src={twentyFiveDollar} onClick={bet25} alt='chip' className='pokerChip'></img>
                <img src={fiftyDollar} onClick={bet50} alt='chip' className='pokerChip'></img>
                <img src={hundredDollar} onClick={bet100} alt='chip' className='pokerChip'></img>
                <img src={fiveHundredDollar} onClick={bet500} alt='chip' className='pokerChip'></img>
                <div className='playerHand'>
                    {playerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}                 
                </div>
                <h2 className='playerBet'>Player Bet: ${playerBet} </h2>
                <h2 className='playerDouble'>Double: ${dbl}</h2>
                <h2 className='playerBankroll'>Player Bankroll: ${playerBankroll} </h2>
                
                
            </div>

        </div>
    )
}

export default Play