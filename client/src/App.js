import React, {useState, useEffect} from 'react';
import QuackForm from './components/QuackForm';

const App = () => {
/**
 * I can use useEffect here to get the currently logged in user in order to give the current
 * user to the whole app.
 */
    
  
   const [currentUser, setUser] = useState('Nobody')

    return(
      <div>
      React IS Working
    <p>{currentUser}</p>
        <QuackForm currentUser={currentUser}/>
      </div>
    )
}


export default App;

/**
 * 
 */