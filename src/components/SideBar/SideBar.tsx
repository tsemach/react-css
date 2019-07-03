import * as React from 'react';

import SideBarProps from './types/SideBarProps.type';
import SideBarState from './types/SideBarState.type'
import './SideBar.scss';

class SideBar extends React.Component<SideBarProps, SideBarState> {  
  render() { 
    return (
      <div className='sidebar'>
        <h1>Side Bar</h1> 
        Example-05: SEARCH-BAR        
      </div>
    );
  }
}
 
export default SideBar;
