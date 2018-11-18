import React from 'react';
import Navbar from './Navbar.js'
import backgroundImg from './homeBG.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className='shade'>
        <Navbar />
        <div >
            <h1 className='headerTitle'>Clean Blog</h1>
            <h2 className='headerSubtitle'>A Blog Theme by Start Bootstrap</h2>
        </div> 
        </div>
        
    </div>
  );
}

export default Header;