import React, { Component } from 'react'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            isToggled: false,
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleLogin = e => {
        e.preventDefault()
        const userInfo = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(userInfo)
        this.setState({ username: '', password: '' })
    }

    handleSignup = e => {
        e.preventDefault()
        const userInfo = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(userInfo)
        this.setState({ username: '', password: '' })
    }

    toggler = () => {
        this.setState(prevState => ({ isToggled: !prevState.isToggled }))
    }


    render(){
        return (
            <div>
                { this.state.isToggled ?
                    <div>
                        <h1>Sign up</h1>
                        <form onSubmit={this.handleSignup}>
                            <input 
                                type="text" 
                                name="username" 
                                value={this.state.username} 
                                onChange={this.handleChange}/>            
                            <input 
                                type="text" 
                                name="password" 
                                value={this.state.password} 
                                onChange={this.handleChange}/>
                            <button>Signup</button>            
                        </form>
                        <span onClick={this.toggler}>Already a member?</span>
                    </div>
                :
                    <div>
                        <h1>Login</h1>
                        <form onSubmit={this.handleLogin}>
                            <input 
                                type="text" 
                                name="username" 
                                value={this.state.username} 
                                onChange={this.handleChange}/>                        
                            <input 
                                type="text" 
                                name="password" 
                                value={this.state.password} 
                                onChange={this.handleChange}/> 
                            <button>Login</button>                       
                        </form>
                        <span onClick={this.toggler}>Not a member?</span>
                    </div>
                }
            </div>
        )
    }
}

export default Auth