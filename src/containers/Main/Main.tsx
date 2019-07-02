import * as React from 'react';

import SideBar from '../../components/SideBar';
import SearchBar from '../../components/SearchBar';
import Note from '../../components/Note'

import MainPropsType from './types/MainProps.type';
import MainStateType from './types/MainState.type';
import './Main.scss';
 
class Main extends React.Component<MainPropsType, MainStateType> {  
  render() {    
    return (  
      <div id="main">
        <SideBar></SideBar>     
        <div className="searchbar-and-note">
          <SearchBar/>
          <Note/>
        </div>
      </div>


    );
  }
}

export default Main;
 