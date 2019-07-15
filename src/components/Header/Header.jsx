import * as React from 'react';

import './Header.scss';

const Header = () => {
  return (
    // <div className="header-container">
    //   <div className="header">
    //     Example-05: HEADER
    //   </div>
    // </div>  
    
    <div className="header-container"> 
      <h2 className="header-title"><a href="#">React CSS/SCSS</a></h2>      
      <ul className="header-navbar">
        <li><a href="#">Open</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Save</a></li>
        <li><a href="#">Delete</a></li>                                           
      </ul>            
      <ul className="header-menu">
        <li><a href="#">About Me</a></li>
        <li><a href="#">My Projects</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Contect</a></li>                                           
      </ul>      
    </div>
    


    // <div className="header-container">
    //   <div className="header">                
    //     <h2 className="header-title"><a href="#">Reacsdvsv CSS/SCSS</a></h2>
    //     {/* <ul>
    //       <li><a href="#">About Me</a></li>
    //       <li><a href="#">My Projects</a></li>
    //       <li><a href="#">Search</a></li>
    //       <li><a href="#">Contect</a></li>                                           
    //     </ul>       */}
    //   </div>
    // </div>
  )
}

export default Header;
