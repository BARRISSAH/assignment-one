import React, { useState, } from 'react'

function LoginComponent() { 
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('');
const [ loggedIn, setLoggedIn ] = useState(false);


const handleEmailInput = (event) => {

  setEmail(event.target.value)
}
const handlePasswordInput = (event) => {
  setPassword(event.target.value)
};

function handleLogin(event) {
  event.preventDefault();
  if (email === "barbaraamissah264@gmail.com" && password ==="26499") {
    setLoggedIn(true)
    alert('yes')
  } 
    else {
      alert('no')
  }
}

function handleLogout(event) {
event.preventDefault();
setLoggedIn(false)
}



    return (
        <div>
          <h1>Already Have An Account</h1>
        {
        loggedIn
        ?
        
        <>
        <p>Welcome, Barbara Amissah-Duodu</p>
        <button onClick={handleLogout}>Logout</button>
        </>
        :
      <>
        <form>
            <label>Email Address:</label>
            <input type="text" value={email} onChange={handleEmailInput}/>

            <label>Password:</label>
            <input type="password" value={password} onChange={(event) => handlePasswordInput(event)}/>

            <br></br>
            <button onClick={handleLogin}>Login</button>
            
            
        </form>
        </>
}
        </div>
        
        
    )
}

export default LoginComponent
