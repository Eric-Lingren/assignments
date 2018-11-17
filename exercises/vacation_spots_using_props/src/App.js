import React from 'react';
import Cards from './Cards'

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]

const App = () => {
  
    return (
      <div>
        <h1 className='header'>Vacation Spots</h1>
        <div className='wrapper'>
          {
            vacationSpots.map(location => 
              <Cards 
                place={location.place}
                price={location.price}
                timeToGo={location.timeToGo}
              />
            )
          }
        </div>
      </div>
    );
  
}

export default App;
