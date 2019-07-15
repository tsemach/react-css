import * as React from 'react';

import Coder from '../Coder'

import './Note.scss';

class Note extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
const code = `
onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'Facebook' 
  };
}
`;        
    return (
      <React.Fragment>
        <div className="note scrollable">
          <strong>Example-05: This area display the render code.</strong> 
        </div>
      </React.Fragment>
    )}
}
export default Note;

