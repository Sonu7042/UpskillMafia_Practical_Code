import { useState } from 'react'

import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');

  const isButtonDisabled = inputValue.trim() === '';
  

  return (

    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Type something..."
      />
      <button disabled={isButtonDisabled}>
        Submit
      </button>
    </div>
  
    
  )
}

export default App
