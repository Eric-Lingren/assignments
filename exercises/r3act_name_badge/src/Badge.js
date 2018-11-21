import React from 'react'

const Badge = (props) => {

return (
    
    <div className='badgeWrapper'> 
        <div className='badgeContents'>
            <div className='formHeader'>
                <h3 className='hello'>Completed Badge</h3>
                <h5 className='iAm'> This is who you are:</h5>
            </div>

            <h4>First Name: {props.firstName} </h4>
            <h4>Last Name: {props.lastName} </h4>
            <h4>Email: {props.email}</h4>
            <h4>Birth Place: {props.birthPlace}</h4>
            <h4>Phone #: {props.phone}</h4>
            <h4>Favorite Food: {props.favFood}</h4>
            <h4>About: {props.about}</h4>

        </div>
    </div>
)

}

export default Badge