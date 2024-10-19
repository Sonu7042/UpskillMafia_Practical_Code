import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword]=useState("")


  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str +=  "!@#$%^&*-_+=[]{}~`"

    
    for(let i=1; i<=length; i++){
      let char= Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])



  useEffect(()=>{
    passwordGenerator()
    console.log("length", length)

  }, [ length, numberAllowed, charAllowed, passwordGenerator])


  function copyPasswordToClipboard(){
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
  }

  return (
    <div className="main">
      <div className="wrapper">
        <h1>Password Generator</h1>

        <div className="passwordDiv">
          <input type="text" placeholder="password" readOnly value={password} ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} >copy</button>
        </div>

        <div className="options">
          <div className="rangeDiv">
            <input type="range" min={6}  max={50}  onChange={(e)=> setLength(e.target.value)}  value={length}/>

            <label>Length: {length}</label>
          </div>

          <div className="numberDiv">
            <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)} />
            <label htmlFor="">Numbers</label>
          </div>

          <div className="charaterDiv">
            <input type="checkbox" id="characterInput"  defaultChecked={charAllowed} onChange={()=>setCharAllowed((prev)=>!prev)}/>
            <label id="characterInput" htmlFor="">Charactors</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
