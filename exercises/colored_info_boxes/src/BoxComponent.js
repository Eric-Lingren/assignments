import React from 'react';

const BoxComponent = (props) => {
    return (
      <div className='box' style={{backgroundColor:props.backgroundColor}}>
            <h2>{props.title} </h2> 
            <h3>{props.subtitle}</h3>
            <p>{props.info}</p>
      </div>
    );
}


export default BoxComponent;
