import React from 'react'


const Pet = (props) => {

const {petName, breed} = props
console.log(petName, breed)

    return (
        <div>
            {petName}
            {breed}
        </div>
    )
}
export default Pet