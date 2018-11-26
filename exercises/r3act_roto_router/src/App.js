import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Services from "./Services"


class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
        </Switch>
      </div>
    );
  }
}

export default App;
