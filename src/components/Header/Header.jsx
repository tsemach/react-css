import * as React from 'react';

import './Header.scss';

const Header = () => {
  return (    
    <div className="header-container">         
      <h2 className="header-title">
        <a className="header-titile-name" href="#">React CSS/SCSS [</a>
        <a className="tsemach-link" href="https://github.com/tsemach">tsemach@github.com</a>               
        <a className="header-titile-name" href="#">]</a>
      </h2>
      
      <ul className="header-menu">
        <li><a href="#">About Me</a></li>
        <li><a href="#">My Projects</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Contect</a></li>                                           
      </ul>      
    </div>
  )
}

export default Header;
