import React, { Component } from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';

import TreeNode from './TreeNode';

export default class Tree extends Component {
  constructor() {
    super();
    this.getRootNodes = this.getRootNodes.bind(this);
    this.getChildNodes = this.getChildNodes.bind(this); 
    this.onToggle = this.onToggle.bind(this)
    this.onNodeSelect = this.onNodeSelect.bind(this)
  }

  getRootNodes() {
    const nodes = this.props.data;
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes(node) {
    const nodes = this.props.data;
    if ( ! node.children ) return [];
    return node.children.map(path => nodes[path]);
  }

  onToggle(node) {
    const nodes = this.props.data;
    nodes[node.path].isOpen = ! node.isOpen;
    this.setState({ nodes });
  }

  onNodeSelect(node) {
    const { onSelect } = this.props;
    onSelect(node);
  }

  render() {
    const rootNodes = this.getRootNodes();
    return (
      <div>
        { rootNodes.map(node => (          
          <TreeNode 
            key={'Tree' + node.path}
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
          />
        ))}
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired,
};