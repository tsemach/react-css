import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header'
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>        
      </React.Fragment>
    );
  }
}

export default App;