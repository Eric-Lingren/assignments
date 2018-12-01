import React from 'react'
import './css/play.css'
import DisplayACard from './DisplayACard'

const Play = (props) => {
const { dealHand, dealOneCard, dealerHandImages, playerHandImages, countDealerTotal, countPlayerTotal, playerHandTotal, dealerHandTotal, playerStands, } = props;

function tableStatus(){
    if(playerHandTotal < 21){
        return <h1>Dealer Stands on 17</h1>
    }else if(playerHandTotal === 21 || dealerHandTotal > 21){
        return <h1>You Win!</h1>
    } else{
        return <h1>You Busted</h1>
    }
}
    return (
        <div className='playContainer'>
            <div className='table'>
                <div className='dealerHand'>
                {dealerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}
                </div>
                <h2>Dealer Total: {dealerHandTotal}</h2>
                {
                    tableStatus()
                }
                
                <button onClick={dealHand} >Deal Hand</button>
                <button onClick={dealOneCard} >Hit</button>
                <button onClick={playerStands} > Stand </button>
                <h2>Player Total: {playerHandTotal} </h2>
                <div className='playerHand'>
                    {playerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}                 
                </div>
                
                
            </div>

        </div>
    )
}

export default Play