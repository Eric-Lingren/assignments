import React from 'react'
import './css/play.css'
import DisplayACard from './DisplayACard'

const Play = (props) => {
const { dealHand, dealOneCard, dealerHandImages, playerHandImages, } = props;

// console.log(playerHandImages)



    return (
        
        <div className='playContainer'>
            <div className='table'>
                <div className='dealerHand'>
                {dealerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}
                </div>
                
                <button onClick={dealHand} >Deal Hand</button>
                <button onClick={dealOneCard} >Hit</button>
                <div className='playerHand'>
                    {playerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}                 
                </div>
                
            </div>

        </div>
    )
}

{/* <img className='displayCard' src={playerHandImages[0]}></img>
                    <img className='displayCard' src={playerHandImages[1]}></img>
                    <img className='displayCard' src={playerHandImages[2]}></img>
                <img className='displayCard' src={playerHandImages[3]}></img> */}

export default Play