import React from 'react'
import {withTheme} from './ThemeChanger'

const Footer = (props) => {

    return(
        <div className={`${props.theme}-footer`}>
            This site has been created by Eric.  Thanks for visiting!
        </div>
    )
}

export default withTheme(Footer)