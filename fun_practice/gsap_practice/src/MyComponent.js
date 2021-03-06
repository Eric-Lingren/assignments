import React, { Component } from 'react';
import TweenLite from 'gsap/TweenLite';


class MyComponent extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount(){
    // use the node ref to create the animation
    this.myTween = TweenLite.to(this.myElement, 1, {x: 300, y: 300});
  }

  render(){
    console.log(this)
    return <div  ref={div => this.myElement = div} />
  
  }
}
// style={{ width: 500, height: 500, backgroundColor: 'blue' }}

export default MyComponent;
