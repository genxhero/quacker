import React from 'react';
import HomeFeed from './components/HomeFeed';
import QuackerNav from './components/QuackerNav';
import QuackShow from './components/QuackShow';
import { ApolloProvider, Query} from 'react-apollo';
import client from './utils/apollo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import currentUser from './queries/currentUser';
const App = () => {
/**
 *TODO: utilize useEffect here to get the currently logged in user in order to give the current
 * user to the whole app.
 * TODO 2: Make a current user query, butterscotch pie
 */
 
 const TemporaryRightA = () => {
   return (<div>Home page.</div>)
 }

 const TemporaryRightB = () => {
  return (<div>Explore page.</div>)
 }

//  const { loading, error, data } = useQuery(CURRENT_USER)

    return(
      <ApolloProvider client={client}>

      <Query query={currentUser}>   
        {({data, loading, client})=> {
            if (loading) return <p/>
            console.log(data)
            return (
<Router>
          <div className="container">  
            <div className="row no-gutters">
              <div className="col">
                <QuackerNav currentUser={data.currentUser} />
              </div>
              <div className="col-6">
                <Switch>
                  <Route  path = "/home" component={HomeFeed} />
                  <Route exact path = "/:username/status/:quackId" component={QuackShow} />
                </Switch>
              </div>
            
              <div className="col">
                <Switch>
                  <Route path="/home" component={TemporaryRightA}/>
                  <Route path = "/explore" component={TemporaryRightB} />
                  <Route exact path = "/:username/status/:quackId" component={TemporaryRightA} />
                </Switch>
              </div>
          </div>          
        
        </div>
        </Router>
            )
        }} 
      </Query>
        
      </ApolloProvider>
    )
}


export default App;

/**
 * 
 */