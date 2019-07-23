import React, { Component } from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';

import TreeNode from './TreeNode';

// const data = {
//   '/root': {
//     path: '/root',
//     type: 'folder',
//     isRoot: true,
//     children: ['/root/david', '/root/jslancer'],
//   },
//   '/root/david': {
//     path: '/root/david',
//     type: 'folder',
//     children: ['/root/david/readme.md'],
//   },
//   '/root/david/readme.md': {
//     path: '/root/david/readme.md',
//     type: 'file',
//     content: 'Thanks for reading me me. But there is nothing here.'
//   },
//   '/root/jslancer': {
//     path: '/root/jslancer',
//     type: 'folder',
//     children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
//   },
//   '/root/jslancer/projects': {
//     path: '/root/jslancer/projects',
//     type: 'folder',
//     children: ['/root/jslancer/projects/treeview'],
//   },
//   '/root/jslancer/projects/treeview': {
//     path: '/root/jslancer/projects/treeview',
//     type: 'folder',
//     children: [],
//   },
//   '/root/jslancer/vblogs': {
//     path: '/root/jslancer/vblogs',
//     type: 'folder',
//     children: [],
//   },
//   '/linux': {
//     path: '/linux',
//     type: 'folder',
//     isRoot: true,
//     children: ['/root/david', '/root/jslancer'],
//   },
// };

export default class Tree extends Component {
  constructor() {
    super();
    // this.state = {
    //   nodes: data,
    // };
    this.getRootNodes = this.getRootNodes.bind(this);
    this.getChildNodes = this.getChildNodes.bind(this); 
    this.onToggle = this.onToggle.bind(this)
    this.onNodeSelect = this.onNodeSelect.bind(this)
  }

  getRootNodes() {
    // const { nodes } = this.state;
    const nodes = this.props.data;
    // console.log("getRootNodes: ", JSON.stringify(values(nodes).filter(node => node.isRoot === true), undefined, 2))
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes(node) {
    // const { nodes } = this.state;
    const nodes = this.props.data;
    if ( ! node.children ) return [];
    return node.children.map(path => nodes[path]);
  }  

  onToggle(node) {
    // const { nodes } = this.state;
    const nodes = this.props.data;
    // console.log('nodes: ', JSON.stringify(nodes, undefined, 2))
    // console.log('node.path = ', node)
    nodes[node.path].isOpen = ! node.isOpen;
    this.setState({ nodes });
  }

  onNodeSelect(node) {
    const { onSelect } = this.props;
    onSelect(node);
  }

  render() {
    const rootNodes = this.getRootNodes();
    // console.log("rootNodes = ", JSON.stringify(rootNodes, undefined, 2))
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