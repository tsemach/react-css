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
      <div className="note-container">
        <div className="note scrollable">
          <FancyBorder color="blue">
            <h1 className="Dialog-title">
              Welcome
            </h1>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
          </FancyBorder>
          <strong>Example-05: This area display the render code.</strong> 
        </div>
      </div>
    )}
}
export default Note;

