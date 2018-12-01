import React from 'react'
import './css/play.css'
import DisplayACard from './DisplayACard'

const Play = (props) => {
const { dealHand, dealOneCard, dealerHandImages, playerHandImages, countDealerTotal, countPlayerTotal, playerHandTotal} = props;

    return (
        <div className='playContainer'>
            <div className='table'>
                <div className='dealerHand'>
                {dealerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}
                </div>
                <h2>Dealer Total: {countDealerTotal}</h2>
                {
                    playerHandTotal <= 21 ? <h1>Dealer Stands on 17</h1> : <h1>You Busted</h1>
                }
                
            <button onClick={dealHand} >Deal Hand</button>
                <button onClick={dealOneCard} >Hit</button>
                <h2>Player Total: {playerHandTotal} </h2>
                <div className='playerHand'>
                    {playerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}                 
                </div>
                
                
            </div>

        </div>
    )
}

export default Play