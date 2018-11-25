import React from 'react';


const Box = (props) => {
  // style={{props.boxcolor}}
    return (
      <div className='box' style={{backgroundColor: props.boxColor, width: props.boxWidth, height: props.boxHeight}}>
      </div>
    )
  
}

export default Box;
