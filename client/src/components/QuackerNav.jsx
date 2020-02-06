import React from 'react'
import {Link} from 'react-router-dom';

const QuackerNav = (props) => {
    return (
    <div className="">
        
          <Link to="/home">home</Link>
          <Link to="/explore">explore</Link>
          <li>notifications</li>
          <li>messages</li>
          <li>bookmarks</li>
          <li>lists</li>
          <li>profile</li>
    </div>
    )
}

export default QuackerNav;