import React, {useState, useEffect} from 'react';
import HomeFeed from './components/HomeFeed';
import QuackerNav from './components/QuackerNav';
import Quack from './components/Quack';
import { ApolloProvider } from 'react-apollo';
import client from './utils/apollo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const App = () => {
/**
 * I can use useEffect here to get the currently logged in user in order to give the current
 * user to the whole app.
 */
 
 const TemporaryRightA = () => {
   return (<div>Home page.</div>)
 }

 const TemporaryRightB = () => {
  return (<div>Explore page.</div>)
 }

   const [currentUser, setUser] = useState('Nobody')

    return(
      <ApolloProvider client={client}>
         <Router>
          <div className="container">  
            <div className="row">
              <div className="col-sm">
                <QuackerNav />
              </div>
              <div className="col-sm">
                <Switch>
                  <Route  path = "/home" component={HomeFeed} />
                  <Route exact path = "/:username/status/:quackId" component={Quack} />
                </Switch>
              </div>
            
              <div className="com-sm">
                <Switch>
                  <Route path="/home" component={TemporaryRightA}/>
                  <Route path = "/explore" component={TemporaryRightB} />
                </Switch>
              </div>
          </div>          
        
        </div>
        </Router>
      </ApolloProvider>
    )
}


export default App;

/**
 * 
 */