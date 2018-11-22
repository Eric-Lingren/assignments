import React from  'react'

const SuperHero = (props) => {
    const {key, name, picture, phrase} = props;

    function sayPhrase (){
        alert(`${name}'s catchphrase is '${phrase}'`)
      }

    return(
        

        <div onClick={sayPhrase}>
            <h2>{name}</h2>
            <img src={picture}></img>
        </div>
    )
}

export default SuperHero