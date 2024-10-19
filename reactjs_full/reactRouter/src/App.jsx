import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import {Outlet} from 'react-router-dom'

function App() {

  return (
   <>
  <Header />
  <main style={{height:"60vh", width:"100%", backgroundColor:"pink"}}>

  <Outlet/>
    
  </main>
  <Footer/>
   </>
 
  )
}

export default App
