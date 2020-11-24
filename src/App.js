import React from 'react'
import SignupComponent from './SignupComponent'
import LoginComponent from './LoginComponent'
import Navbar from './Navbar';
import HomePage from './HomePage';
import WritePost from './WritePost';
import NewPost from './NewPost';
import AllPost from './AllPost';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LogoutButton from './LogoutButton';
import "./MyStyle.css";



function App() {
 
  return (
    <div>
      <SignupComponent/>
       

      <main>
        <Router>
          <Navbar/>
           <Switch>
            <Route path="/HomePage" component={HomePage} exact />
            <Route path="/signupComponent" component={SignupComponent}/>
             <Route path="/loginComponent" component={LoginComponent}/>
            <Route path="/WritePost" component={WritePost}/>
            <Route path="/NewPost"component={NewPost}/>
            <Route path="/AllPost" component={AllPost}/>
            <Route path="/logoutButton" component={LogoutButton}/>
           </Switch>
           </Router>
     </main>
      
      

      

      
      
    </div>
  )
}

export default App
