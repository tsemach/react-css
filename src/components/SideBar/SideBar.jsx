import * as React from 'react';
import * as fs from 'fs';

import FileExplorer from '../Tree/FileExplorer';
import data from '../../containers/Main/data';
import './SideBar.scss';

/**
 * using simple tree component 
 */

class SideBar extends React.Component {  
  constructor() {  
    super();  

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(node) {
    this.props.onSelect(node);
  }

  render() { 
    return (
      <div className='sidebar'>
        <FileExplorer data={data} onSelect={this.onSelect}/>
      </div>
    );
  }
}
 
export default SideBar;
