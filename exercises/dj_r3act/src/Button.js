import React from 'react';


const Button = (props) => {
    

    return (
      <div>
        <button onClick={props.changeColor}> Touch Me! </button>
      </div>
    )
  
}

export default Button;
