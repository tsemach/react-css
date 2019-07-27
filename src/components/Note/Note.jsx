import * as React from 'react';
import styled from 'styled-components';

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
    // this.state = {html: '', styleheet: ''};
    // this.options = {
    //   decodeEntities: true,
    //   transform: this.transform
    // };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { code, path } = this.props;
    
  //   if (path && prevProps.path !== path) {
  //     const { html, styleheet } = this.renderCode(code);
  //     this.setState({html});

  //     console.log("[Note::componentDidUpdate] size of code = ", code.length)
  //     console.log("[Note::componentDidUpdate] GOING TO GET scss.content = ", styleheet)

  //     if ( ! styleheet.content ) {
  //       return;
  //     }

  //     fetch('http://127.0.0.1:1234' + styleheet.content)
  //       .then(response => {    
  //         return response.text()
  //       })
  //       .then(styleheet => {
  //         // console.log("[Note::componentDidUpdate] FOUNF styleheet = ", styleheet)
                    
  //         this.setState({styleheet});
  //       })
  //   }
  // }

  // renderCode(code) {
  //   let rendering = {html: false, body: false};
  //   let styleheet = {html: false, head: false, meta: false, content: ''}
   
  //   function transform(node) {       
  //     if (node.type === 'tag') {        
  //       if (node.name === 'html') {
  //         rendering.html = true;   
  //         styleheet.html = true; 

  //         return;
  //       }
  //       //--------------------------------------------------------------
  //       if (node.name === 'body' && rendering.html) {
  //         rendering.body = true;

  //         return;
  //       }
  //     }      
  //     if (rendering.html && rendering.body) {
  //       return;
  //     }
  //     //--------------------------------------------------------------
  //     if (node.name === 'head' && styleheet.html) {
  //       styleheet.head = true;

  //       return;
  //     }
  //     if (node.name === 'meta' && styleheet.head) {        
  //       if (node.attribs['name'] && node.attribs['content'] && node.attribs['name'] === 'stylesheet') {
  //         console.log("TRANSFORM: content:", node.attribs['content']);
  //         styleheet.content = node.attribs['content'];
  //       }        
  //       return;
  //     } 
  //     //--------------------------------------------------------------

  //     return null;
  //   }

  //   const options = {
  //     decodeEntities: true,
  //     transform: transform
  //   };   
  //   return {html: ReactHtmlParser(code, options), styleheet};
  // }

  render() {        
    const { html, stylesheet} = this.props;
    
    const StyledNote = styled.div`
      ${stylesheet}
    `
    return (      
      <div className="note-container">
        <div className="note scrollable">
          <FancyBorder color="blue">     
            <StyledNote>            
              <div>{html}</div>
             </StyledNote>
          </FancyBorder>
          
        </div>
      </div>
    )}
}
export default Note;

