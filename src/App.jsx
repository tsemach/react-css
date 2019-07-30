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


console.log("APP: ENV:", process.env.REACT_APP_PUBLIC_URL)

/**
 * state: 
 *  view: 
 *    left - cssCode, htmlCode
 *    right - cssCode, htmlCode, htmlRendered
 */
class App extends Component {
  constructor() {
    super()
    
    this.state = {node: {}, views: {left: '', right: ''}}
    this.onSideBarSelect = this.onSideBarSelect.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleSearchBarSCSSIcon = this.handleSearchBarSCSSIcon.bind(this);
    this.handleSearchBarHtmlIcon = this.handleSearchBarHtmlIcon.bind(this);
  }

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
    this.setViews(node)
    this.setState({node});
  }

  handleSearchBarChange(optionSelected) {
    const node = {
        lebel: utils.basename(optionSelected.value),
        path: optionSelected.value,
        type: 'file',
        content: utils.basename(optionSelected.value)
    }
    this.setViews(node);
    this.setState({node});    
  }

  setViews(node) {
    let views = {left: this.state.views.left, right: this.state.views.right};
    
    views.right = 'htmlRendered';
    if (node.path.endsWith('.html')) {
      views.left = 'htmlCode';
    } 

    if (node.path.endsWith('.css') || node.path.endsWith('.scss')) {
      views.left = 'cssCode';      
    } 
    this.setState({views});
  }

  handleSearchBarSCSSIcon(node) {
    this.handleSearchBarHtmlIcon(node);
  }

  handleSearchBarHtmlIcon(node) {

    let views = {left: this.state.views.left, right: this.state.views.right};
            
    if (views.left === 'htmlCode' && views.right === 'htmlRendered') {
      views.right = 'cssCode';
      this.setState({views});    
      return 
    } 

    if (views.left === 'htmlCode' && views.right === 'cssCode') {
      views.right = 'htmlRendered';
      this.setState({views});    
      return 
    } 

    if (views.left === 'cssCode' && views.right === 'htmlRendered') {
      views.right ='htmlCode';
      this.setState({views});          
      return 
    } 

    if (views.left === 'cssCode' && views.right === 'htmlCode') {
      views.right = 'htmlRendered';
      this.setState({views});          
      return 
    }     
  }

  render() {    
    return (
      <React.Fragment>    
        <Header/>
        <div className="sidebar-main-container">
          <SplitPane split="vertical" minSize={50} defaultSize={275}>
            <SideBar className="sizebar" data={data} onSelect={this.onSideBarSelect}/>
            <Main 
              node={this.state.node} 
              options={this.toOptions(data)} 
              views={this.state.views}
              onSearchBarChange={this.handleSearchBarChange}
              onSearchBarHtmlIcon={this.handleSearchBarHtmlIcon}
            />
          </SplitPane>
        </div>     
      </React.Fragment>
    );
  }
}

export default App;