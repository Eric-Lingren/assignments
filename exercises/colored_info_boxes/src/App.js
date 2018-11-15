import React from 'react';
import './App.css';
import BoxComponent from './BoxComponent'

const App = () => {
    return (
      <div>
        <h1 className='title'>Here are some colored boxes created with React and props:</h1>
        <div className='boxContainer'>
          <BoxComponent title='Title 1' subtitle='Subtitle 1' info='Information 1' backgroundColor='red' />
          <BoxComponent title='Title 2' subtitle='Subtitle 2' info='Information 2' backgroundColor='blue' />
          <BoxComponent title='Title 3' subtitle='Subtitle 3' info='Information 3' backgroundColor='green' />
          <BoxComponent title='Title 4' subtitle='Subtitle 4' info='Information 4' backgroundColor='purple' />
          <BoxComponent title='Title 5' subtitle='Subtitle 5' info='Information 5' backgroundColor='orange' />
          <BoxComponent title='Title 6' subtitle='Subtitle 6' info='Information 6' backgroundColor='yellow' />
          <BoxComponent title='Title 7' subtitle='Subtitle 7' info='Information 7' backgroundColor='silver' />
          <BoxComponent title='Title 8' subtitle='Subtitle 8' info='Information 8' backgroundColor='maroon' />
          <BoxComponent title='Title 9' subtitle='Subtitle 9' info='Information 9' backgroundColor='brown' />
          <BoxComponent title='Title 10' subtitle='Subtitle 10' info='Information 10' backgroundColor='aqua' />
        </div>
      </div>
    );
}


export default App;
