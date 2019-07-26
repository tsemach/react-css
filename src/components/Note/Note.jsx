import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

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
    this.rendering = {html: false, body: false};
    this.options = {
      decodeEntities: true,
      transform: this.transform
    };
  }
      
  renderCode(code) {
    let rendering = {html: false, body: false};

    function transform(node) {      
      if (node.type === 'tag') {        
        if (node.name === 'html') {          
          rendering.html = true;                        

          return;
        }
        if (node.name === 'body' && rendering.html) {
          rendering.body = true;

          return;
        }
      }      
      if (rendering.html && rendering.body) {
        return;
      }
      return null;
    }

    const options = {
      decodeEntities: true,
      transform: transform
    };
    return ReactHtmlParser(code, options);
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
             <div>{this.renderCode(code, this.options)}</div>;                                      
          </FancyBorder>
          
        </div>
      </div>
    )}
}
export default Note;

