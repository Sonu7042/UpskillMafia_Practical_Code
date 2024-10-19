import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data=useLoaderData()
    console.log("data", data)
  return (
    <div>

        <h2>{`Followers : ${data.followers}`}</h2>
      
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
