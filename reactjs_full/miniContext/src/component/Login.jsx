import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {

  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")

  const {setData}=useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)
    setData({username, password

    })
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="username"   onChange={(e)=>setUsername(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
