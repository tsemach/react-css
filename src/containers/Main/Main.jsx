import * as React from 'react';

import SplitPane from 'react-split-pane';

import Config from '../../common/config';
import renderHtml from '../../common/render-html';
import SearchBar from '../../components/SearchBar';
import Coder from '../../components/Coder';
import Note from '../../components/Note'

import './Main.scss';
 
class Main extends React.Component {  
  constructor() {
    super();
    this.state = {code: '', html: '', stylesheet: '', path: '', fullpath: ''};
  }

  /**
   * componentDidUpdate: read code file from server, parse it, extract the stylesheet from the header
   *  meta data, get the stylesheet from server and feed it to code and note components
   */
  async componentDidUpdate(prevProps, prevState) {
    const { node } = this.props;    

    if (node.path && prevProps.node.path !== node.path) {          
      let response, code;

      const fullpath = '/videos' + node.path;
      response = await fetch('http://127.0.0.1:1234' + fullpath)
      code = await response.text();
      const { html, stylesheet } = renderHtml(code);

      response = await fetch('http://127.0.0.1:1234' + stylesheet.content)      
      const codeStylesheet = await response.text();

      this.setState({code, html, stylesheet: codeStylesheet, path: node.path, fullpath});
    }
  }

  getLanguage(filename) {
    if ( ! filename ) return '';        
    if (filename.endsWith('.html')) return 'html'
    if (filename.endsWith('.css')) return 'css'
    if (filename.endsWith('.javascript')) return 'javascript'

    return '';
  }  

  render() {
    const { node } = this.props;
    
    return (        
      <div className="main">            
        <SearchBar node={node}/>
        <div className="code-note-container">
          <SplitPane split="vertical" minSize={50} defaultSize={800} pane2Style={{overflow: "auto"}}>
            <Coder code={this.state.code} language={this.getLanguage(node.path)}/>
            <Note html={this.state.html} stylesheet={this.state.stylesheet} fullpath={this.state.fullpath}/>
          </SplitPane>
        </div>        
      </div>
    );
  }
}

export default Main;
 