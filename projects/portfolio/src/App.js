import React from 'react';
import Info from './Info'
import Github from './Github'
import Portfolio from './Portfolio'
import Linkedin from './Linkedin'
import Resume from './Resume'
import TransitionGroup from 'react-transition-group'


const App = () => {
 
    return (
      <div className='pageWrapper'>
        <div className='iconWrapper'>
        
          <Info />
          <Github />
          <Portfolio />
          <Linkedin />
          <Resume />
          
        </div>
      </div>
    );
}

export default App;
