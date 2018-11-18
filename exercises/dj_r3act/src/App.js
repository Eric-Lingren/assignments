import React from 'react';
import Box from './Box'
import Button from './Button'


const App = () => {
    
    return (
      <div>
        <h1>DJ React </h1>
        <h2>Club Reputation: Rookie</h2>

        <div className='turnTable'>

          <div className='boxContainer'>
            <Box id={1}/>
            <Box id={2}/>
            <Box id={3}/>
            <Box id={4}/>
          </div>

          <div className='buttonContainer'>
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </div>

        </div>
        
      </div>
    )
  
}

export default App;
