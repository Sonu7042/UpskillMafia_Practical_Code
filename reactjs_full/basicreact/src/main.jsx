import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './index.css'

const reactElement = (
  <a href="https://www.google.com/" target='_blank'>Visit google</a>
)


const username="sonu"
const reactCreateElement=React.createElement(
  "a",
  {href:"https://www.google.com/",
  target:'_blank'},
  "Click me to reach the google",
  username
)

createRoot(document.getElementById('root')).render(

    // reactElement
    reactCreateElement
    // <App/>
  
)
