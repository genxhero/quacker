import React from 'react'
import {Link, withRouter} from 'react-router-dom';

const QuackerNav = (props) => {
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
    </div>
    )
}

export default withRouter(QuackerNav);