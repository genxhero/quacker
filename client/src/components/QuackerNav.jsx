import React from 'react'
import {Link} from 'react-router-dom';

const QuackerNav = (props) => {
    return (
    <div style={{"display":"flex", "flexDirection":"column"}}>
          <Link to="/home">home</Link>
          <Link to="/explore">explore</Link>
          <Link to="/">notifications</Link>
          <li>messages</li>
          <li>bookmarks</li>
          <li>lists</li>
          <li>profile</li>
    </div>
    )
}

export default QuackerNav;