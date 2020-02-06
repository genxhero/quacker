import React, {useState, useEffect} from 'react';
import QuackForm from './components/QuackForm';
import { ApolloProvider } from 'react-apollo';
import client from './utils/apollo';
import {Router, Switch} from 'react-router-dom';
const App = () => {
/**
 * I can use useEffect here to get the currently logged in user in order to give the current
 * user to the whole app.
 */
  
   const [currentUser, setUser] = useState('Nobody')

    return(
      <ApolloProvider client={client}>
         <Router>
        <div className="quacker-app">
          <div className="quacker-nav">
            <ul>
              <li>home</li>
              <li>explore</li>
              <li>notifications</li>
              <li>messages</li>
              <li>bookmarks</li>
              <li>lists</li>
              <li>profile</li>
            </ul>
          </div>

          <div>
          
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