import React from 'react'

const Play = (props) => {
const { dealHand, } = props

    return (
        <div>
            <h1>Play the Game</h1>
            <button onClick={dealHand} >Deal Hand</button>

        </div>
    )
}

export default Play