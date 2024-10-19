import React from 'react'
import Card from './Card'
import { Outlet } from 'react-router-dom'


const LeftDiv = () => {
  return (
    <div className='leftDiv'>
       <Outlet/>
      
      
      
    </div>
  )
}

export default LeftDiv
