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
    this.state = {code: '', path: ''};
  }

  // showFile (fullname) {   
  //   console.log("showFile is called ... filename: ", fullname);
  //   fetch('http://127.0.0.1:1234' + fullname)
  //     .then(response => {    
  //       return response.text()        
  //     })
  //     .then(data => {
  //       console.log("DATA:", data);

  //     })
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("Main:componentDidMount: is called, prevState=", prevState);    
    const { node } = this.props;
    
    if (prevState.path !== node.path) {      
      if (node.path) {        
        const code = this.readFile('/videos' + node.path);
        this.setState({code, path: node.path})        
      }
    }
  }

  readFile(fullname) {
     console.log("Main::readFile: path = ", fullname);        
    fetch('http://127.0.0.1:1234' + fullname)
      .then(response => {    
        return response.text()
      })
      .then(code => {
        // console.log("DATA:", code);
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

    if (node.path) {        
      //const code = this.readFile('/videos' + node.path);
    }
    
    return (        
      <div className="main">            
        <SearchBar/>
        <div className="code-note-container">
          <SplitPane split="vertical" minSize={50} defaultSize={800} pane2Style={{overflow: "auto"}}>
            <Coder code={this.state.code} language={this.getLanguage(node.path)}/>
            <Note code={this.state.code}/>
          </SplitPane>
        </div>        
      </div>
    );
  }
}

export default Main;
 