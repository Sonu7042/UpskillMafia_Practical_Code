import { useEffect, useState } from 'react'
import './App.css'
import Navbar from "./component/Navbar"

function App() {

  const [name, setName]= useState("sumit")


  return (
    
    <>
    <h1 className=''>Hello {name} </h1>
    <Navbar/>
  

    </>
  
  )
}




export default App
