import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import 'react-splitter-layout/lib/index.css';

import './App.scss';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './containers/Main';

class App extends Component {
  constructor() {
    super()
    
    this.state = {node: {}}
    this.onSideBarSelect = this.onSideBarSelect.bind(this);    
  }

  onSideBarSelect(node) {
    this.setState({node});
  }

  render() {
    console.log("APP: RENDER IS CALLED, state=", this.state);
    return (
      <React.Fragment>    
        <Header/>
        <div className="sidebar-main-container">
          <SplitPane split="vertical" minSize={50} defaultSize={275}>
            <SideBar className="sizebar" onSelect={this.onSideBarSelect}/>
            <Main node={this.state.node}/>
          </SplitPane>
        </div>     
      </React.Fragment>
    );
  }
}

export default App;