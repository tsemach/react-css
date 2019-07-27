import * as React from 'react';
import styled from 'styled-components';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import './Note.scss';

function FancyBorder(props) {
  return (
    <div style={{border: "2px solid blue"}}>
      {props.children}
    </div>
  );
}

const css = `body {
  background: #9c9f84;
  margin: 0;
  font-family: Verdana, Georgia, serif;
  font-size: 14px;
}

#header {
  background-color: #5c755e;
  margin: 10px;
  height: 90px;
  border-radius: 5px;
}

#navbar ul {
  padding: 5px;
  list-style-type: none; /* this get rid of the bollet point of list items */
  text-align: center;
  background-color: #000000;
  margin: 10px;  
  border-radius: 5px;
}

#navbar ul li {
  display: inline;
}

#navbar ul li a {
  text-decoration: none; /* get rid of the underline of the anchor */
  font-family: Arial, Helvetica, sans-serif;
  padding: .2em 1em;
  color: #fff;
  background-color: #000000; 
}

/* when overing we reverse the colors of forward and background */
#navbar ul li a:hover {
  color: #000;
  background-color: #fff;
}

.main {
  background-color: #e5e4d7;
  margin-left: 10px;
  margin-right: 320px;
  margin-top: 10px;
  margin-bottom: 10px;

  border-radius: 5px;
  padding: 20px;
  font-size: 110%;
}

h1 {
  font-size: 120%;
  color: #ce282e;
}

h2 {
  font-size: 120%;
  color: darkblue;
}

.sideright {
  background-color: #e5e4d7;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 20px;
  font-size: 105%;
  float: right;
  width: 260px;
  clear: right;
}

.imagesideright {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 105%;
  float: right;
  width: 300px;
  clear: right;
  /* opacity: 1.0 => full display (regular) */
  opacity: 1.0;
  /* the why transition when it is hover */
  transition: opacity 0.25s ease-in-out;
}

/* make sure there is no space between the class name and the hover */
.imagesideright:hover {
  opacity: 0.4;
}

#footer {
  background-color: #5c755e;
  margin: 10px; 
  height: 60px;
  /* the clear: both protect the footer from the sidebars are that not in the flow to override it */
  clear: both;
  border-radius: 5px;

  /* style of the text in the footer */
  color: #efe5d0;
  text-align: center;
  padding: 15px;
  font-size: 90%;
}

#footer ul {
  padding: 5px;
  list-style-type: none; /* this get rid of the bollet point of list items */
  text-align: center;
  margin: 10px;  
  border-radius: 5px;
}

#footer ul li {
  display: inline;
}

#footer ul li a {
  text-decoration: none; /* get rid of the underline of the anchor */
  font-family: Arial, Helvetica, sans-serif;
  padding: .2em 1em;
  color: #efe5d0;
  background-color: #5c755e; 
}

/* when overing we reverse the colors of forward and background */
#footer ul li a:hover {
  color: #000;
  background-color: #fff;
}

/* ----------------------------------------------------------------------------------------- */

/* Heading Section --------------------------------------------------------------------------*/
h1 {
  font-size: 120%;
  color: #ce282e;
}

h2 {
  font-size: 120%;
  color: darkblue;
}

#header h3 {
  font-size: 250%;
  text-align: center;
  color: #e5e4d7;
  font-family: "Century Gothic", "Gill Sans", Arial, Helvetica, sans-serif;

  /* the h3 inherit the margin of 10px from the #header rule so needs to reset it*/
  margin: 0;

  /* rule for veticaly align any text */
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}`;

// const StyledNote = styled.div`
//   ${css}
// `

class Note extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {html: '', styleheet: ''};
    this.options = {
      decodeEntities: true,
      transform: this.transform
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { code, path } = this.props;
    
    if (path && prevProps.path !== path) {
      const { html, styleheet } = this.renderCode(code);
      this.setState({html});

      console.log("[Note::componentDidUpdate] size of code = ", code.length)
      console.log("[Note::componentDidUpdate] GOING TO GET scss.content = ", styleheet)

      if ( ! styleheet.content ) {
        return;
      }

      fetch('http://127.0.0.1:1234' + styleheet.content)
        .then(response => {    
          return response.text()
        })
        .then(styleheet => {
          // console.log("[Note::componentDidUpdate] FOUNF styleheet = ", styleheet)
                    
          this.setState({styleheet});
        })
    }
  }

  renderCode(code) {
    let rendering = {html: false, body: false};
    let styleheet = {html: false, head: false, meta: false, content: ''}
   
    function transform(node) {       
      if (node.type === 'tag') {        
        if (node.name === 'html') {
          rendering.html = true;   
          styleheet.html = true; 

          return;
        }
        //--------------------------------------------------------------
        if (node.name === 'body' && rendering.html) {
          rendering.body = true;

          return;
        }
      }      
      if (rendering.html && rendering.body) {
        return;
      }
      //--------------------------------------------------------------
      if (node.name === 'head' && styleheet.html) {
        styleheet.head = true;

        return;
      }
      if (node.name === 'meta' && styleheet.head) {        
        if (node.attribs['name'] && node.attribs['content'] && node.attribs['name'] === 'stylesheet') {
          console.log("TRANSFORM: content:", node.attribs['content']);
          styleheet.content = node.attribs['content'];
        }        
        return;
      } 
      //--------------------------------------------------------------

      return null;
    }

    const options = {
      decodeEntities: true,
      transform: transform
    };   
    return {html: ReactHtmlParser(code, options), styleheet};
  }

  render() {        
    const StyledNote = styled.div`
      ${this.state.styleheet}
    `
    return (      
      <div className="note-container">
        <div className="note scrollable">
          <FancyBorder color="blue">     
            <StyledNote>            
              <div>{this.state.html}</div>
             </StyledNote>
          </FancyBorder>
          
        </div>
      </div>
    )}
}
export default Note;

