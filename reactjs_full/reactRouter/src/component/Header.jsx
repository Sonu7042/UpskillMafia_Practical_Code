import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="logo">Logo</div>

        <ul>
            <NavLink className={({isActive})=> isActive? "text-red-500":""} to={"/"}><li>Home</li></NavLink> 
            <NavLink className={({isActive})=> isActive? "text-red-500":""} to={'/about'}><li>About</li></NavLink> 
            <NavLink className={({isActive})=> isActive? "text-red-500":""} to={'/contact'}><li>Contact</li></NavLink> 
            <NavLink className={({isActive})=> isActive? "text-red-500":""} to={'/address'}> <li>Address</li></NavLink>
            <NavLink className={({isActive})=> isActive? "text-red-500":""} to={'/github'}> <li>Github</li></NavLink>
        </ul>


       
      
    </header>
  )
}

export default Header
