import React from 'react';


const Button = () => {
    
function whatsup(){
    alert('hey!')
}
    return (
      <div>
        <button className='myButton' onClick={whatsup}> Touch Me! </button>
      </div>
    )
  
}

export default Button;
