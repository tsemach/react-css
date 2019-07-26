import * as React from 'react';

import './Note.scss';

function FancyBorder(props) {
  return (
    <div style={{border: "2px solid blue"}}>
      {props.children}
    </div>
  );
}

class Note extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { code } = this.props;

    return (
      <div className="note-container">
        <div className="note scrollable">
          <FancyBorder color="blue">
            <h1 className="Dialog-title">
              Welcome
            </h1>
            <p className="Dialog-message">
            </p>
            <strong>Example-05: This area display the render code.</strong> 
          </FancyBorder>
          {code}
        </div>
      </div>
    )}
}
export default Note;

