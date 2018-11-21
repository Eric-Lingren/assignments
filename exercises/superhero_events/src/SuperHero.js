import React from  'react'

const SuperHero = (props) => {
    const {key, name, picture, phrase} = props;

    return(
        <div>
            <h2>{name}</h2>
            <img src={picture}></img>
            <p>{phrase}</p>
        </div>
    )
}

export default SuperHero