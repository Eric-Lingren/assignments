import React from 'react'
import './css/home.css'
import homeLogo from './css/images/blackjackLogo.jpg'

const Home = () => {

    return (
        <div className='homeWrapper'>
            <h1 className='homeText'>So you want to be a card counter...? </h1>
            <img className='homeLogo' src={homeLogo}></img>
        </div>
    )
}

export default Home