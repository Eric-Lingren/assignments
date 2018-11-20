import React from 'react';


const Die = (props) => {
    return (
        <div onClick={() => props.selectedDie()} >

          {props.dice}
          
        </div>
      );
}
 


export default Die;