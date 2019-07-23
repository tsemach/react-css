import React, { Component } from 'react';
import styled from 'styled-components';
import Tree from './Tree';

const StyledFileExplorer = styled.div`
  // width: 800px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;  
`;

const TreeWrapper = styled.div`
  width: 100%;
`;

const data = {
  '/root': {
    path: '/root',
    type: 'folder',
    isRoot: true,
    children: ['/root/david', '/root/jslancer'],
  },
  '/more': {
    path: '/more',
    type: 'folder',
    isRoot: true,
    children: ['/more/david', '/more/jslancer'],
  },
  '/more/david': {
    path: '/root/david',
    type: 'folder',
    children: ['/root/david/readme.md'],
  },
  '/more/jslancer': {
    path: '/more/jslancer',
    type: 'folder',
    children: ['/more/jslancer/projects'],
  },
  '/more/jslancer/projects': {
    path: '/more/jslancer/projects',
    type: 'folder',
    children: [],
  },
  '/root/david': {
    path: '/root/david',
    type: 'folder',
    children: ['/root/david/readme.md'],
  },
  '/root/david/readme.md': {
    path: '/root/david/readme.md',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/jslancer': {
    path: '/root/jslancer',
    type: 'folder',
    children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
  },
  '/root/jslancer/projects': {
    path: '/root/jslancer/projects',
    type: 'folder',
    children: ['/root/jslancer/projects/treeview'],
  },
  '/root/jslancer/projects/treeview': {
    path: '/root/jslancer/projects/treeview',
    type: 'folder',
    children: [],
  },
  '/root/jslancer/vblogs': {
    path: '/root/jslancer/vblogs',
    type: 'folder',
    children: [],
  },
  '/linux': {
    path: '/linux',
    type: 'folder',
    isRoot: true,
    children: ['/root/david', '/root/jslancer'],
  },
};

export default class FileExplorer extends Component { 
  constructor() {
    super()
    this.state = {
      selectedFile: null,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(file) {
    this.setState({ selectedFile: file });
    console.log("FileExplorer: file = ", JSON.stringify(file, undefined, 2));
  }

  render() {
    const { selectedFile } = this.state;
    return (
      <StyledFileExplorer>
        <TreeWrapper>
          <Tree onSelect={this.onSelect} data={data}/>
        </TreeWrapper>
        {/* <div>
          { selectedFile && selectedFile.type === 'file' && selectedFile.content }
        </div> */}
      </StyledFileExplorer>
    )
  }
}