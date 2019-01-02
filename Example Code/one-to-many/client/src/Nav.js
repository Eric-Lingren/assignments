import React from 'react'

const Nav = props => {
    const { isAuthenticated } = props
    return (
        <div>
            { !isAuthenticated && <span>Signup</span>}
            { !isAuthenticated && <span>Login</span> }
            { isAuthenticated && <span onClick={props.logout}>Logout</span> }
        </div>
    )
}

export default Nav