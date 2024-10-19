import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {

    const {data}=useContext(UserContext)

    if(!data) return <div>Please Login</div>

    return <div>Welcome {data.username}</div>


 
}

export default Profile
