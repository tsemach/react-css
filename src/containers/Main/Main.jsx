import * as React from 'react';

import SideBar from '../../components/SideBar';
import SearchBar from '../../components/SearchBar';
import Coder from '../../components/Coder';
import Note from '../../components/Note'

import MainPropsType from './types/MainProps.type';
import MainStateType from './types/MainState.type';
import './Main.scss';
 
class Main extends React.Component {  
  render() {    
    return (        
      <div className="main">            
        <SearchBar/>
        <div className="code-note-container">
          <Coder code="num = num + 1" language="javascript  "/>
          <Note/>
        </div>        
      </div>
    );
  }
}

export default Main;
 