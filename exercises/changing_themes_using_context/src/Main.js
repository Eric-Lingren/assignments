import React from 'react'
import {withTheme} from './ThemeChanger'

const Main = (props) => {

    return(
        <div className={`${props.theme}-main`}>
            
            <h3>This is a color changing theme page.</h3>
            <p>This site demonstrates the power and ease of scalibility for apps built with React using context.</p>

            <button onClick={props.toggleTheme} >{props.theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</button>

            <select onChange={props.selectTheme}>
                <option value='red'>Red Theme</option>
                <option value='blue'>Blue Theme</option>
                <option value='green'>Green Theme</option>
            </select>

        </div>
    )
}

export default withTheme(Main)