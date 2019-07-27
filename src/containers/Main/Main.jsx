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

  async componentDidUpdate(prevProps, prevState) {
    const { node } = this.props;    

    if (node.path && prevProps.node.path !== node.path) {
      //this.setState({path: node.path});

      // read the code file from server
      let response, code;
      const fullpath = '/videos' + node.path;
      response = await fetch('http://127.0.0.1:1234' + fullpath)
      code = await response.text();
      console.log("CCCCCCCCCCCCCC CODE =", code);

      // if html parse, extract stylesheet and fetch it as well
      const { html, stylesheet } = renderHtml(code);

      response = await fetch('http://127.0.0.1:1234' + stylesheet.content)      
      const codeStylesheet = await response.text();

      console.log("HHHHHHHHHHHHHh HTML =", html);
      console.log("SSSSSSSSSSSSSS stylesheet =", codeStylesheet);
      this.setState({code, html, stylesheet: codeStylesheet, path: node.path, fullpath});

      // this.readFile('/videos' + node.path);      
    }
  }

  readFile(fullname) {
    fetch('http://127.0.0.1:1234' + fullname)
      .then(response => {    
        return response.text()
      })
      .then(code => {

        this.setState({code});
      })
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
 