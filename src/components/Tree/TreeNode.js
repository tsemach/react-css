import React, { Children } from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight, FaHtml5, FaReadme, FaCode } from 'react-icons/fa';
import styled from 'styled-components';
import last from 'lodash/last';
import PropTypes from 'prop-types';

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 15;
  if (type === 'file') paddingLeft += 5;
  return paddingLeft;
}

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;  
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;

  &:hover {
    background: lightgray;    
  }
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const getNodeLabel = (node) => node.lebel;

// '/css-layout-03-video-11-14/README.md': {
//     lebel: 'README.md',
//     path: '/css-layout-03-video-11-14/README.md',
//     type: 'file',    
//     content: 'README Layout video 03'
//   },

const getIcon = (node) => {
  if (node.type === 'folder' && node.isOpen === true) { return <FaFolderOpen /> }
  if (node.type === 'folder' && ! node.isOpen) { return <FaFolder /> }  
  if (node.type === 'file' && node.path.endsWith('.html')) { return <FaCode/>}
  if (node.type === 'file' && node.path.endsWith('.css')) { return <FaHtml5/>}
  if (node.type === 'file' && node.path.endsWith('README.md')) { return <FaReadme/>}
  if (node.type === 'file') { return <FaFile /> }
}

const TreeNode = (props) => {
  const { node, getChildNodes, level, onToggle, onNodeSelect } = props;

  return (
    <React.Fragment>
      <StyledTreeNode level={level} type={node.type}>
        <NodeIcon onClick={() => onToggle(node)}>
          { node.type === 'folder' && (node.isOpen ? <FaChevronDown /> : <FaChevronRight />) }
        </NodeIcon>
        
        <NodeIcon marginRight={10}>
          {getIcon(node)}
        </NodeIcon>        

        <span role="button" onClick={() => onNodeSelect(node)}>
          { getNodeLabel(node) }
        </span>
      </StyledTreeNode>

      { node.isOpen && getChildNodes(node).map(childNode => (
        <TreeNode 
          key={'TreeNode' + childNode.path}
          {...props}
          node={childNode}          
          level={level + 1}
        />
      ))}
    </React.Fragment>
  );
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getChildNodes: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onNodeSelect: PropTypes.func.isRequired,
};

TreeNode.defaultProps = {
  level: 0,
};

export default TreeNode;
