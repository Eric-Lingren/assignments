import React from 'react'
import Pet from './Pet'

const Friend = (props) => {
    const {name, age, pets} = props
    const mappedPets = pets.map(item => 
                    <Pet
                        petName={item.name}
                        breed={item.breed}
                    />
                )
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3> 
        
            { mappedPets }

        </div>
    )
}
export default Friend



