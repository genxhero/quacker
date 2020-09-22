import React, {useState}from 'react'
import {Link, withRouter} from 'react-router-dom';
import QuackForm from './QuackForm';


const QuackerNav = (props) => {
    const [quacking, toggleQuackForm] = useState(false);
    const location = props.location.pathname.slice(1);
    console.log(quacking)
    return (
    <div style={{"display":"flex", "flexDirection":"column"}}>
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
          <li>messages</li>
          <li>bookmarks</li>
          <li>lists</li>
          <li>profile</li>
          <div className="new-quack-btn"onClick={() => toggleQuackForm(true)}> Quack</div>
          {quacking && <div className={"modal"}> <QuackForm close={() => toggleQuackForm(false)} location={location} isModal={true}/> </div>}
    </div>
    )
}

export default withRouter(QuackerNav);