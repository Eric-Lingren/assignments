import React from 'react'

const DisplayCard = (props) => {
    console.log(props)
    const {card} = props;

    console.log(card)

    return(
        
            <img className='displayCard' src={card}></img>
     
    )
}

export default DisplayCard