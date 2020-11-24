import React from 'react'

function LogoutButton() { 
    
    function handleLogout(event) {
    (event).preventDefault();
    }



    return (
        <div>
            <h1>Logout</h1>
           
            <h1>Click Here To Logout</h1>
<button onClick={handleLogout}>Logout</button>



            
        </div>
    )
}

export default LogoutButton;
