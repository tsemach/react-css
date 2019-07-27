import * as React from 'react';

import SplitPane from 'react-split-pane';

import Config from '../../common/config';
import SearchBar from '../../components/SearchBar';
import Coder from '../../components/Coder';
import Note from '../../components/Note'

import './Main.scss';
 
class Main extends React.Component {  
  constructor() {
    super();
    this.state = {code: '', path: '', fullname: ''};
  }

  componentDidUpdate(prevProps, prevState) {
    const { node } = this.props;
    const fullname = '/videos' + node.path;

    if (prevState.fullname !== fullname) {
      // this.setState({fullname});

      if (node.path) {
        const code = this.readFile(fullname);
        //this.setState({code, path: node.path})        
      }
    }
  }

  readFile(fullname) {
    fetch('http://127.0.0.1:1234' + fullname)
      .then(response => {    
        return response.text()
      })
      .then(code => {
        this.setState({code, fullname});
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
            <Note code={this.state.code} path={node.path}/>
          </SplitPane>
        </div>        
      </div>
    );
  }
}

export default Main;
 