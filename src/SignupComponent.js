import React, {useState} from 'react'

function SignupComponent() {

    const [firstName, setFirstName]  = useState('')
    const [ lastName, setLastName ] = useState('');
    const [ username, setUsername] = useState('');
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState('');
    const [ signup, setSignup ] = useState(false);

    const handleFirstNameInput = (event) => {
    setFirstName(event.target.value)
    }
    const handleLastNameInput = (event) => {
      setLastName(event.target.value)
    };
    
    
    const handleUsernameInput = (event) => {
     setUsername(event.target.value)
      };

      const handleEmailInput = (event) => {
          setEmail(event.target.value)
      }

     
      const handlePasswordInput = (event) => {
        setPassword(event.target.value)
      };
      
      


     
    function handleSignup(event) {
      event.preventDefault();
      if(firstName === "Barbara" && lastName === "Amissah-Duodu" && username === "Barrissah" && 
       email === "barbaraamissah264@gmail.com" && password ==="26499" ) {
        setSignup(true)
        
       }
      } 
    
    
    
    function handleLogin(event) {
    event.preventDefault();
    setSignup(false)
    }
    
    
      return (
        <div>
             {
            signup
            ?
            
            <>
            <p>Account Created !</p>
            <button onClick={handleLogin}>Login</button>
            </>

            :

            
         
        

           <>
            <form>
                <label>First Name: </label>
                <input type="text" name={firstName} onChange={handleFirstNameInput}/>

                 <br></br>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={handleLastNameInput}/>

                <br></br>
                <lable> Username:</lable>
                <input type="text" value={username} onChange={handleUsernameInput}/>


                <br></br>
                <label>Email Address:</label>
            <input type="text" value={email} onChange={handleEmailInput}/>

            <br></br>
            <label>Password:</label>
            <input type="password" value={password} onChange={(event) => handlePasswordInput(event)}/>

            <br></br>
            <button onClick={handleSignup}>Signup</button>
            
            


            </form>
           </>
            
             }
        </div>
    )
}

export default SignupComponent;
