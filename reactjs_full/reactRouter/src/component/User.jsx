import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userid}=useParams()
    console.log(userid)
  return (
    <div>

        <h1>{`UserId ${userid}` }</h1>
            

    </div>
  )
}

export default User
