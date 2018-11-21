import React from 'react'
import {findDOMNode, render} from 'react-dom'

function makeFlip (Components) {

    return class Flip extends React.Component {
        // This is called at the same time as componentDidMount
        componentWillEnter (callback) {
            const el = findDOMNode(this)
            TweenMax.fromTo(el, 0.5, {rotationY: 180, opacity: 0}, {rotationY: 0, opacity: 1, onComplete: callback} )
        }

        // This is called when the child has been removed from the ReactTransitionGroup
        componentWillLeave (callback) {
            const el = findDOMNode(this)
            TweenMax.fromTo(el, 0.5, {rotationY: 0, opacity: 0}, {rotationY: -180, opacity: 0, onComplete: callback} )
        }
        render() {
            return <Component {...this.props} />
        }
    }
}


// Animation hooks that are provided a callback will prevent other animations from running until the callback is called.