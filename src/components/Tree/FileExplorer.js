import React, { Component } from 'react';
import styled from 'styled-components';
import Tree from './Tree';

const StyledFileExplorer = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;  
`;

const TreeWrapper = styled.div`
  width: 250px;
`;

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
  }

  render() {
    const { selectedFile } = this.state;

    return (
      <StyledFileExplorer>
        <TreeWrapper>
          <Tree onSelect={this.onSelect} />
        </TreeWrapper>
        <div>
          { selectedFile && selectedFile.type === 'file' && selectedFile.content }
        </div>
      </StyledFileExplorer>
    )
  }
}