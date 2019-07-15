import * as React from 'react';

import TreeMenu from 'react-simple-tree-menu';
import SideBarProps from './types/SideBarProps.type';
import SideBarState from './types/SideBarState.type'
import './SideBar.scss';
import '../../../node_modules/react-simple-tree-menu/dist/main.css';

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
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
        <h1>Side Bar</h1> 
vv        {/* <TreeMenu data={data}>      </TreeMenu> */}
      </div>
    );
  }
}
 
export default SideBar;
