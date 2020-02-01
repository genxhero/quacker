import React, {useState, useEffect} from 'react';
import QuackForm from './components/QuackForm';
import { ApolloProvider } from 'react-apollo';

const App = () => {
/**
 * I can use useEffect here to get the currently logged in user in order to give the current
 * user to the whole app.
 */
    
  
   const [currentUser, setUser] = useState('Nobody')

    return(
      <ApolloProvider>
        <QuackForm currentUser={currentUser}/>
      </ApolloProvider>
    )
}


export default App;

/**
 * 
 */