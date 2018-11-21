import React, { Component } from 'react'
import portfolioIcon from './css/images/portfolioIcon.png'

class Portfolio extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef()
    }

    
    // TweenMax.to(portfolioIcon, 1, {// eslint-disable-line 
    //     rotationY:20, transformOrigin:"left 20% -1000", transformPerspective:400, x:'15%', y:'3%', height:'65%',})

    render() {
        
        return(
            <img ref={this.myRef} className='icon' id='portfolioIcon' src={portfolioIcon} alt='Portfolio Icon'></img> 
            
        )
    }
}

export default Portfolio 