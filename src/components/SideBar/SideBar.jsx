import * as React from 'react';

import FileExplorer from '../Tree/FileExplorer';
import './SideBar.scss';

/**
 * using simple tree component 
 * from: https://reactjsexample.com/a-simple-react-tree-menu-component/
 */

const data = [{
  key: 'mammal',
  label: 'Mammal',
  url: 'https://www.google.com/search?q=mammal',    
  nodes: [
      {
        key: 'second-level',
        label: 'Node 1 at ',
        nodes: [
          {
            key: 'third level',
            label: 'Last node of the branch',            
          },
        ],
      },
    ],  
},

{
  key: 'reptile',
  label: 'Reptile',
  url: 'https://www.google.com/search?q=reptile',
},

{
  key: 'reptile',
  label: 'Reptile',
  url: 'https://www.google.com/search?q=reptile',
},
{
  key: 'reptile',
  label: 'Reptile',
  url: 'https://www.google.com/search?q=reptile',
},
{
  key: 'reptile',
  label: 'Reptile',
  url: 'https://www.google.com/search?q=reptile',
},
{
  key: 'reptile',
  label: 'Reptile',
  url: 'https://www.google.com/search?q=reptile',
},

];

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
  render() { 
    return (
      <div className='sidebar'>
        <FileExplorer />   
      </div>
    );
  }
}
 
export default SideBar;
