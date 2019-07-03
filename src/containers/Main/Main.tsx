import * as React from 'react';

import SearchBar from '../../components/SearchBar';
import SubMenu1 from '../../components/SubMenu1';
import SubMenu2 from '../../components/SubMenu2'

import MainPropsType from './types/MainProps.type';
import MainStateType from './types/MainState.type';
import './Main.scss';
 
class Main extends React.Component<MainPropsType, MainStateType> {  
  render() {    
    return (        
      <div className="main">            
        <SearchBar/>
        <div className="submenu1-submenu2-container">
          <SubMenu1/>
          <SubMenu2/>
        </div>        
      </div>
    );
  }
}

export default Main;
 