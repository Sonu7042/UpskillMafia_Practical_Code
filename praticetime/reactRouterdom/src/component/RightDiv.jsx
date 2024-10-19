import React from 'react'
import { Link } from 'react-router-dom'

const RightDiv = () => {
  return (
    <div className='rightDiv'>
     <Link to={'/payment'}><button>Processed to payment</button></Link>
    </div>
  )
}

export default RightDiv
