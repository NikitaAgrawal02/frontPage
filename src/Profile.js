import React from 'react'
import faker from 'faker'
const Profile = () => {
    return (
        <div className="Profile">
           <img alt="avatar" src={faker.image.people() }/>
        </div>
    )
}

export default Profile
