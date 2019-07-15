import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import 'react-splitter-layout/lib/index.css';

import './App.scss';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>    
        <Header/>
        <div className="sidebar-main-container">
          <SplitPane split="vertical" minSize={50} defaultSize={100}>
            <SideBar className="sizebar"/>
            <Main/>
          </SplitPane>
        </div>     
      </React.Fragment>
    );
  }
}

export default App;