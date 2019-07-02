import * as React from 'react';
import { Component } from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">    
      <h2 className="header-title"><a href="#">Reac CSS/SCSS</a></h2>
      <ul>
        <li><a href="#">About Me</a></li>
        <li><a href="#">My Projects</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Contect</a></li>                                           
      </ul>      
    </div>
  )
}

export default Header;
