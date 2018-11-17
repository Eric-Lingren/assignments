import React from 'react'


const Pet = (props) => {

const {petName, breed} = props

    return (
        <div>
            {petName} is a 
            {breed}
        </div>
    )
}
export default Pet