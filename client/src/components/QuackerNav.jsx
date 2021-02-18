import React, {useState}from 'react'
import {Link, withRouter} from 'react-router-dom';
import QuackForm from './QuackForm';
import DemoLogin from './DemoLogin';


const QuackerNav = (props) => {
    const [quacking, toggleQuackForm] = useState(false);
    const location = props.location.pathname.slice(1);
    const {currentUser} = props;
    // console.log(currentUser)
    return (
    <div className="navbar">
          <Link className="nav-link" to="/home">
             <div className="nav-link-content">
                 <span>Home</span>
             </div>
          </Link>
          <Link className="nav-link" to="/explore">
             <div className="nav-link-content">
                 <span>Explore</span>
             </div>
          </Link>
          <Link className="nav-link" to="/">
              <div className="nav-link-content">
                  <span>Notifications</span>
              </div>
          </Link>
          <li>Messages</li>
          <li>Bookmarks</li>
          <li>Lists</li>
          <li>Profile</li>
          <div className="new-quack-btn"onClick={() => toggleQuackForm(true)}> Quack</div>
          {!currentUser && <DemoLogin />}
          {currentUser && <div>Hello, {currentUser.firstName} </div>}
          {quacking && <div className={"modal"}> <QuackForm close={() => toggleQuackForm(false)} location={location} isModal={true}/> </div>}
    </div>
    )
}

export default withRouter(QuackerNav);