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

// const data = {
//   '/docker': {
//     lebel: 'Docker: collection of docker notes',
//     path: '/docker',
//     type: 'folder',
//     isRoot: true,
//     children: ['/docker/build', '/docker/run'],
//   },
//   '/docker/build': {
//     lebel: 'sdvsv this is buidf commend',
//     path: '/docker/build',
//     type: 'file',    
//     content: 'Thanks for reading me me. But there is nothing here.'
//   },
//   '/docker/run': {
//     lebel: 'sdvsv this is buidf commend',
//     path: '/docker/run',
//     type: 'file',    
//     content: 'Thanks for reading me me. But there is nothing here.'
//   },
//   '/linux': {
//     lebel: 'Linux',
//     path: '/linux',
//     type: 'folder',
//     isRoot: true,
//     children: ['/linux/david', '/linux/jslancer'],
//   },
//   '/linux/david': {
//     lebel: 'David',
//     path: '/linux/david',
//     type: 'folder',
//     children: ['/linux/david/readme.md'],
//   },
//   '/linux/jslancer': {
//     lebel: 'Jslencer',
//     path: '/linux/jslancer',
//     type: 'folder',
//     children: ['/linux/jslancer/projects'],
//   },
//   '/linux/jslancer/projects': {
//     lebel: 'Project',
//     path: '/linux/jslancer/projects',
//     type: 'folder',
//     children: [],
//   },
//   '/linux/david/readme.md': {
//     lebel: 'README.md',
//     path: '/linux/david/readme.md',
//     type: 'file',
//     content: 'Thanks for reading me me. But there is nothing here.'
//   },
// };

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
    const { data } = this.props;
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