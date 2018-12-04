import React from 'react'
import './css/play.css'
import DisplayACard from './DisplayACard'
import SplitHand from './SplitHand'
import oneDollar from './css/images/$1.png';
import fiveDollar from './css/images/$5.png';
import twentyFiveDollar from './css/images/$25.png';
import fiftyDollar from './css/images/$50.png';
import hundredDollar from './css/images/$100.png';
import fiveHundredDollar from './css/images/$500.png';


const Play = (props) => {
const { dealHand, dealOneCard, dealerHandImages, playerHandImages, playerHandImages2, playerHandTotal, dealerHandTotal, playerStands, playerDoubles, playerDoubleBet, playerSplits, playerBet, playerBankroll, bet1, bet5, bet25, bet50, bet100, bet500, playerClickedStand, playerClickedDouble, playerClickedSplit, dealerWins, playerWins, playerBust, dealerBust, clearBet, gameCount, whatsTheCountGame, cardsDealt, decksPlayed, remainingCards, remainingDecks, trueCount, playerBaseBet, playerHand2Total, } = props;

    function tableStatus(){
        // console.log('did dealer win: ' + dealerWins);
        // console.log('did player bust: ' +  playerBust); 
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
        //console.log('did player click double: ' + playerClickedDouble)
        if (playerClickedDouble){
            return playerDoubleBet
        }
    }
    const dbl = doubleDown()

    function optimalBetSize(){
        if(trueCount >= 1){
            return  ( (Math.round(trueCount) * playerBaseBet) )
        }else {
            return playerBaseBet
        }
        
    }

    function splitHands(){
        if(playerClickedSplit){
        return <h2>Player Total Hand 2: {playerHand2Total} </h2>
        }
    }
    const splitTheseCards = splitHands()
    const betSize = optimalBetSize()
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
                <button onClick={whatsTheCountGame} > Show Count</button>
                <h2>Player Total: {playerHandTotal} </h2>
                {splitTheseCards}
                <img src={oneDollar} onClick={bet1} alt='chip' className='pokerChip'></img>
                <img src={fiveDollar} onClick={bet5} alt='chip' className='pokerChip'></img>
                <img src={twentyFiveDollar} onClick={bet25} alt='chip' className='pokerChip'></img>
                <img src={fiftyDollar} onClick={bet50} alt='chip' className='pokerChip'></img>
                <img src={hundredDollar} onClick={bet100} alt='chip' className='pokerChip'></img>
                <img src={fiveHundredDollar} onClick={bet500} alt='chip' className='pokerChip'></img>
                <div className='playerHand'>
                    {playerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}                 
                </div>
                <SplitHand playerClickedSplit={playerClickedSplit} splitCards={playerHandImages2} />
                {/* <Hand playerClickedSplit={playerClickedSplit} playerHandImages={playerHandImages} card={dealtCard} /> */}
                
                <h2 className='playerBet'>Player Bet: ${playerBet} </h2>
                <h2 className='playerDouble'>Double: ${dbl}</h2>
                <h2 className='playerBankroll'>Player Bankroll: ${playerBankroll} </h2>
                <div className='countStats'>
                    <h2>Count Stats:</h2>
                    <h3>Running Count: {gameCount} </h3>
                    <h3>True Count: {trueCount} </h3>
                    <h3>Cards Dealt: {cardsDealt} </h3>
                    <h3>Decks Played: {decksPlayed} </h3>
                    <h3>Remaining Cards: {remainingCards} </h3>
                    <h3>Remaining Decks: {remainingDecks} </h3>
                    <h3>Optimal Bet: {betSize }</h3>
                </div>
                
                
            </div>

        </div>
    )
}

export default Play