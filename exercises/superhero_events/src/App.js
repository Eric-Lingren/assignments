import React from 'react';
import SuperHero from './SuperHero';
import heroList from './Heros.json';

console.log(heroList)

const App = () => {

  const mappedHeros = heroList.Hero.map(person => 
    <SuperHero 
      key={person.id}
      name={person.name}
      picture={person.image}
      phrase={person.catchPhrase}

    />
  )

  

    return (
      <div>
        {mappedHeros}
        <SuperHero />

      </div>
    );

}

export default App;
