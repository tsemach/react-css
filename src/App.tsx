import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header'
import SideBar from './components/SideBar';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>    
        <Header/>
        <div className="sidebar-main-container">
          <SideBar/>
          <Main/>
        </div>     
      </React.Fragment>
    );
  }
}

export default App;