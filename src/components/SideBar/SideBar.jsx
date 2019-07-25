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

// const data = {
//   '/css-layout-01-video-01-06': {
//     lebel: 'css-layout-01-video-01-06',
//     path: '/css-layout-01-video-01-06',
//     type: 'folder',
//     isRoot: true,
//     children: ['/css-layout-01-video-01-06/css-layout-01.css', '/css-layout-01-video-01-06/css-layout-01.html', '/css-layout-01-video-01-06/README.md'],
//   },
//   '/css-layout-01-video-01-06/css-layout-01.css': {
//     lebel: 'css-layout-01.css',
//     path: '/css-layout-01-video-01-06/css-layout-01.css',
//     type: 'file',    
//     content: 'CSS Layout video 01'
//   },
//   '/css-layout-01-video-01-06/css-layout-01.html': {
//     lebel: 'css-layout-01.html',
//     path: '/css-layout-01-video-01-06/css-layout-01.html',
//     type: 'file',    
//     content: 'HTML Layout video 01'
//   },
//   '/css-layout-01-video-01-06/README.md': {
//     lebel: 'README.md',
//     path: '/css-layout-01-video-01-06/README.md',
//     type: 'file',    
//     content: 'README Layout video 01'
//   },
// };

class SideBar extends React.Component {  
  constructor() {  
    super();  
  }

  render() { 
    console.log(fs.readFileSync(__dirname + '/data.js').toString())
    return (
      <div className='sidebar'>
        <FileExplorer data={data}/>   
      </div>
    );
  }
}
 
export default SideBar;
