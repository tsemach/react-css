import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import _ from 'lodash';
import 'react-splitter-layout/lib/index.css';
import 'babel-polyfill';

import * as utils from './common/utils';
import data from './common/data';

import './App.scss';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './containers/Main';

class App extends Component {
  constructor() {
    super()
    
    this.state = {node: {}}
    this.onSideBarSelect = this.onSideBarSelect.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  // '/css-layout-01-video-01-06/css-layout-01.css': {
  //   lebel: 'css-layout-01.css',
  //   path: '/css-layout-01-video-01-06/css-layout-01.css',
  //   type: 'file',    
  //   content: 'CSS Layout video 01'
  // },


  toOptions(data) {
    let options = [];
    _.map(data, (d) => {
      if (d.type === 'file') {
        options.push({ value: d.path, label: d.path });
      }
    });

    return options;
  }

  /**
   * Node is in the form of: 
   * {
   *    "lebel": "css-layout-03.html",
   *    "path": "/css-layout-03-video-11-14/css-layout-03.html",
   *    "type": "file",
   *    "content": "HTML Layout video 03"
   * }
   */
  onSideBarSelect(node) {
    this.setState({node});
    console.log('APP:', JSON.stringify(node, undefined, 2));
  }

  handleSearchBarChange(optionSelected) {
    this.setState({
      node: {
        lebel: utils.basename(optionSelected.value),
        path: optionSelected.value,
        type: 'file',
        content: utils.basename(optionSelected.value)
    }});    
  }

  render() {    
    return (
      <React.Fragment>    
        <Header/>
        <div className="sidebar-main-container">
          <SplitPane split="vertical" minSize={50} defaultSize={275}>
            <SideBar className="sizebar" data={data} onSelect={this.onSideBarSelect}/>
            <Main node={this.state.node} options={this.toOptions(data)} onSearchBarChange={this.handleSearchBarChange}/>
          </SplitPane>
        </div>     
      </React.Fragment>
    );
  }
}

export default App;