import React from 'react';

const Cards = (props) => {
  const {place, price, timeToGo} = props


  let howExpensive = costs(price);

  function costs(price){
        if(price < 500){
            return '$'
        } else if (price >= 500 && price <= 1000){
            return '$$'
        } else {  
        return '$$$'
        }
    }

    let season = time(timeToGo)
console.log(season)
    function time(timeToGo){
        if(timeToGo === 'Spring'){
            return 'yellow'
        } else if (timeToGo === 'Summer'){
            return 'orange'
        } else if(timeToGo === 'Fall'){
            return 'brown'
        }
    }
 
console.log(timeToGo)


    return (
      <div className='card' style={{backgroundColor:season}}>
        <h2>{place}</h2>
        <h3>Cost of trip is ${price}</h3>
        <h3>{howExpensive}</h3>
        <h4>Best time to go is {timeToGo}</h4>
      </div>
    );
  
}

export default Cards;
