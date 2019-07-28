  import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

  function renderHtml(code) {
    let rendering = {html: false, body: false};
    let stylesheet = {html: false, head: false, meta: false, content: ''}
   
    function transform(node) {       
      if (node.type === 'tag') {        
        if (node.name === 'html') {
          rendering.html = true;   
          stylesheet.html = true; 

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
      if (node.name === 'head' && stylesheet.html) {
        stylesheet.head = true;

        return;
      }
      if (node.name === 'meta' && stylesheet.head) {        
        if (node.attribs['name'] && node.attribs['content'] && node.attribs['name'] === 'stylesheet') {          
          stylesheet.content = node.attribs['content'];
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
    return {html: ReactHtmlParser(code, options), stylesheet};
  }

export default renderHtml;