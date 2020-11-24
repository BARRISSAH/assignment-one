import React from 'react'
import { Link } from "react-router-dom"


function NavBar() {
    return (
        <div classname="App">
            
            <nav>
                
                < Link>
                <ul>
                   <Link to="/homePage">
                       {""} 
                       <li>HomePage</li>
                       </Link>
                   <Link to="/writePost">
                       {""} 
                       <li>WritePost</li>
                       </Link>
                       <Link to="/newPost">
                           {""}
                           <li>NewPost</li>
                       </Link>
                   <Link to="/allPost">
                       {""} 
                       <li>AllPost</li>
                       </Link>
                   <Link to="/logoutButton">
                       {""} 
                       <li>Logout</li>
                       </Link>
                </ul>
                </Link>
        
            </nav>
            
        </div>
    )
}

export default NavBar
