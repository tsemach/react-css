import * as React from 'react';

import './SubMenu2.scss';

import SubMenu2PropsType from './types/SubMenu2Props.type';
import SubMenu2StateType from './types/SubMenu2State.type';
import './SubMenu2.scss';

class SubMenu2 extends React.Component<SubMenu2PropsType, SubMenu2StateType> {
  
  constructor(props: SubMenu2PropsType) {
    super(props);
  }

  render() {        
    return (
      <React.Fragment>
        <div className="submenu2 scrollable">
          <strong>Example-05: This area display the render code.</strong> 
        </div>        
      </React.Fragment>
    )}
}
export default SubMenu2;

