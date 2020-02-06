import React, {useState, useEffect} from 'react';
import HomeFeed from './components/HomeFeed';
import QuackerNav from './components/QuackerNav';
import { ApolloProvider } from 'react-apollo';
import client from './utils/apollo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const App = () => {
/**
 * I can use useEffect here to get the currently logged in user in order to give the current
 * user to the whole app.
 */
  
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
                </Switch>
              </div>
            
              <div className="com-sm">
                All the stuff on the right goes here.
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