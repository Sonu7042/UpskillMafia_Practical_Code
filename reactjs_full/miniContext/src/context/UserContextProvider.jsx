import React, { useState } from 'react'
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {

    const [data, setData]=useState("")
    console.log(data)


  return (

    <UserContext.Provider value={{data, setData}}>
        {children}
    </UserContext.Provider>
   
  )
}

export default UserContextProvider
