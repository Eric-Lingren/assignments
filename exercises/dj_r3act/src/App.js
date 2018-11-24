import React, {Component} from 'react';
import Box from './Box'
import Button from './Button'


class App extends Component {
  constructor(){
    super()

    this.state = {
      box1: 'black',
      box2: 'black',
      box3: 'black',
      box4: 'black',
      box1Width: '200px',
      box2Height: '200px',
    
    }
  }

  
  changeBlack = () => {
    this.setState(prevState => {
      return {
        button1: !prevState.Button1,
        box1: prevState.box1 === 'white' ? 'black' : 'white',
        box2: prevState.box2 === 'white' ? 'black' : 'white',
        box3: prevState.box3 === 'white' ? 'black' : 'white',
        box4: prevState.box4 === 'white' ? 'black' : 'white',
      }
    })

  }

  changePurple = () => {
    this.setState(prevState => {
      return {
        box1: 'purple',
        box2: 'purple',
      }
    })
  }

  changeBlue3 = () => {
    this.setState(prevState => {
      return {
        box3: 'blue',
      }
    })
  }
  changeBlue4 = () => {
    this.setState(prevState => {
      return {
        box4: 'blue',
      }
    })
  }

  changeSizeWidth = () => {
    this.setState(prevState => {
      return {
        box1Width: '250px',
      }
    })
  }
  changeSizeHeight = () => {
    this.setState(prevState => {
      return {
        box2Height: '250px',
      }
    })
  }

  changeYellow = () => {
    this.setState(prevState => {
      return {
        box1: 'yellow',
      }
    })
  }

  changeOrange = () => {
    this.setState(prevState => {
      return {
        box4: 'orange',
      }
    })
  }

    render () {
      
      return (

      <div>
        <h1>DJ React </h1>
        <h2>Club Reputation: Rookie</h2>

        <div className='turnTable'>

          <div className='boxContainer'>
            <Box boxColor={this.state.box1} boxWidth={this.state.box1Width} name='box1'/>
            <Box boxColor={this.state.box2} boxHeight={this.state.box2Height} name='box2'/>
            <Box boxColor={this.state.box3}  name='box3'/>
            <Box boxColor={this.state.box4}  name='box4'/>
          </div>

          <div className='buttonContainer'>
            <Button button1={this.state.button1} changeColor={this.changeBlack}/>
            <Button button2={this.state.button2} changeColor={this.changePurple}/>
            <Button button3={this.state.button3} changeColor={this.changeBlue3}/>
            <Button button4={this.state.button4} changeColor={this.changeBlue4}/>
            <Button button4={this.state.button4} changeColor={this.changeSizeWidth}/>
            <Button button5={this.state.button4} changeColor={this.changeSizeHeight}/>
            <Button button6={this.state.button4} changeColor={this.changeYellow}/>
            <Button button7={this.state.button4} changeColor={this.changeOrange}/>
          </div>

        </div>
        
      </div>
    )
    }
  
}

export default App;
