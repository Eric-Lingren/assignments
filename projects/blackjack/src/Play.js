import React from 'react'

const Play = (props) => {
const { dealHand, dealOneCard, } = props

    return (
        <div>
            <h1>Play the Game</h1>
            <button onClick={dealHand} >Deal Hand</button>
            <button onClick={dealOneCard} >Hit</button>

        </div>
    )
}

export default Play