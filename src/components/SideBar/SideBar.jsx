import * as React from 'react';
import * as fs from 'fs';

import FileExplorer from '../Tree/FileExplorer';
import Config from '../../common/config';
import data from './data';
import './SideBar.scss';

/**
 * using simple tree component 
 */

const data2=  [{
    key: 'first-level-node-1',
    label: 'Node 1 ',
    url: 'https://www.google.com/search?q=mammal',    
    nodes: [
      {
        key: 'second-level',
        label: 'Node 1 at ',
        nodes: [
          {
            key: 'third-level-node-1',
            label: 'Last node of the branch',            
          },
        ],
      },
    ],
  },
  {
    key: 'first-lnode-2',
    label: 'Node 2 at the first level',
  },
];

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
