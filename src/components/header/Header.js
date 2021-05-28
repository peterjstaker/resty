import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header>
      <nav>
        <ul>
          <li className="navListItem">
            <h1>RESTy</h1>
          </li>          
          <li className="navListItem">
            <Link to="/">Home</Link>
          </li>
          <li className="navListItem">
            <Link to="/history">History</Link>
          </li>
          <li className="navListItem">
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
