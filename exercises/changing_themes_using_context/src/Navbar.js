import React from 'react';
import {withTheme} from './ThemeChanger'

const Navbar = (props) => {

    return(
        <div className={`${props.theme}-navbar`}>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
            </ul>
        </div>
    )
}

export default withTheme(Navbar)