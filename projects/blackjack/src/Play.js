import React from 'react'
import './css/play.css'
import DisplayACard from './DisplayACard'

const Play = (props) => {
const { dealHand, dealOneCard, dealerHandImages, playerHandImages, countDealerTotal, countPlayerTotal} = props;

    return (
        <div className='playContainer'>
            <div className='table'>
                <div className='dealerHand'>
                {dealerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}
                </div>
                <h2>Dealer Total: {countDealerTotal}</h2>
            <button onClick={dealHand} >Deal Hand</button>
                <button onClick={dealOneCard} >Hit</button>
                <h2>Player Total: {countPlayerTotal} </h2>
                <div className='playerHand'>
                    {playerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}                 
                </div>
                
                
            </div>

        </div>
    )
}

export default Play