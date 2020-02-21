import React, {useState}from 'react'
import {Link, withRouter} from 'react-router-dom';
import QuackForm from './QuackForm';


const QuackerNav = (props) => {
    const [quacking, toggleQuackForm] = useState(false);
    const location = props.location.pathname.slice(1);

    return (
    <div style={{"display":"flex", "flexDirection":"column"}}>
          <Link to="/home">
             <div className="nav-link-content">
                 <span>Home</span>
             </div>
          </Link>
          <Link to="/explore">
             <div className="nav-link-content">
                 <span>Explore</span>
             </div>
          </Link>
          <Link to="/">
              <div className="nav-link-content">
                  <span>Notifications</span>
              </div>
          </Link>
          <li>messages</li>
          <li>bookmarks</li>
          <li>lists</li>
          <li>profile</li>
          <div className="new-quack-btn"onClick={() => toggleQuackForm(true)}> Quack</div>
          {quacking && <QuackForm close={() => toggleQuackForm(false)} location={location} isModal={true}/>}
    </div>
    )
}

export default withRouter(QuackerNav);