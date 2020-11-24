import React from 'react'
import WritePost from './WritePost';
import NewPost from './NewPost';
import AllPost from './AllPost';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <h1> Home Page</h1>
            <main>
            <Router>
                <Switch>
                    <Route  path="/WritePost" component= {WritePost} />
                    <Route path="/NewPost" component= {NewPost} />
                    <Route path="/Allpost" component={ AllPost} />
                </Switch>
            </Router>
            </main>
            




            
        </div>
    )
}

export default HomePage
