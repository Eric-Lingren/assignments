import React, { Component } from 'react'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'
import Nav from './Nav'

class App extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            isAuthenticated: false
        }
    }

    componentDidMount(){
        // User is saved in localStorage when they signup/login so that if they
        // refresh their page, this componentDidMount will check localStorage and 
        // re-log them in 
        if(localStorage.getItem("user")){
            this.setState({
                user: JSON.parse(localStorage.getItem("user")),
                isAuthenticated: true
            })
        }
    }

    signup = userInfo => {
        axios.post('/auth/signup', userInfo).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            this.setState({
                user: res.data,
                isAuthenticated: true
            })
        })
    }

    login = userInfo => {
        axios.post('/auth/login', userInfo).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            this.setState({
                user: res.data,
                isAuthenticated: true
            })
        })
    }

    logout = () => {
        localStorage.removeItem('user')
        this.setState({ user: {}, isAuthenticated: false })
    }

    addTodo = newTodo => {
        axios.post(`/todo/${this.state.user._id}`, newTodo).then(res => {

        })
    }

    render() {
        const { signup, login, logout } = this
        return (
            <div>
                <Nav isAuthenticated={this.state.isAuthenticated} logout={logout}/>
                <Switch>
                    <Route exact path="/" render={props => <Auth {...props} signup={signup} login={login}/>}/>
                </Switch>
            </div>
        )
    }
}

export default App;