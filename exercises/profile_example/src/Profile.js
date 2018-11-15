import React from 'react'

const Profile = (props) => {
    return (
        <div>
            <h3>Username: {props.name} email: {props.email} Profile Picture: {props.img} {props.image} </h3>
        </div>
    )
}

export default Profile