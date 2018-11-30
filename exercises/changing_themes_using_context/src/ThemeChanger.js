import React, {Component} from 'react';
const {Provider, Consumer} = React.createContext();

class ThemeChanger extends Component {
    constructor(){
        super()
        this.state = {
            theme: 'dark'
        }
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === 'dark' ? 'light' : 'dark'
            }
        })
    }

    selectTheme = (e) => {
        const color = e.target.value;
        console.log(`'${color}'`);
        this.setState({
            theme: color
        })
    }

    return (
        {
        props.greeting === 'friend' ? 
        <div>
            <h1>Hello, you are a friend</h1>
        </div>
        :
        <div> 
            <h1> Goodbye, you are the worst.</h1>
        </div>
        }
    )
    
    render(){
        return (
            <div>
                <Provider value={{
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme,
                    selectTheme: this.selectTheme
                }} >
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

export const withTheme = (C) => props => (
    <Consumer>
        { value => <C {...value} {... props} />}
    </Consumer>
)

export default ThemeChanger



axios.get("url", { headers {'x-mashape..' : "sdajksdjkasjdskksjdiw", "acept" : 
"application/json"}}).tbhr