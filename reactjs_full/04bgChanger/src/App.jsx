import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
   <>
   <div style={{backgroundColor: color,  width:"100%",  height:"100vh", display:"flex", justifyContent:"center", alignItems:"end"}}>
    
    <div className='buttonDiv'>
      <button onClick={()=>setColor("red")}>Red</button>
      <button  onClick={()=>setColor("blue")}>Blue</button>
      <button onClick={()=>setColor("green")}>Green</button>
      <button onClick={()=>setColor("yellow")}>Yellow</button>
    </div>
   </div>

   </>
  )
}

export default App
