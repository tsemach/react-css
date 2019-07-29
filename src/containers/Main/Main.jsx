import * as React from 'react';

import SplitPane from 'react-split-pane';

import Config from '../../common/config';
import renderHtml from '../../common/render-html';
import SearchBar from '../../components/SearchBar';
import Coder from '../../components/Coder';
import Note from '../../components/Note'

import './Main.scss';
 
const MainRightSide = (props) => {
   const { html, htmlCode, stylesheet, fullpath, views , language } = props;

   return (
    <div>
      {
        (views.left === 'htmlCode' && views.right === 'htmlRendered') && 
        <Note html={html} stylesheet={stylesheet} fullpath={fullpath}/>
      }
      {
        (views.left === 'cssCode' && views.right === 'htmlRendered') && 
        <Note html={html} stylesheet={stylesheet} fullpath={fullpath}/>
      } 
      {
        (views.left === 'htmlCode' && views.right === 'cssCode') &&               
        <Coder code={stylesheet} language={language}/>
      }
      {
        (views.left === 'cssCode' && views.right === 'htmlCode') &&               
        <Coder code={htmlCode} language={language}/>
      }
    </div>
  )
}

class Main extends React.Component {  
  constructor() {
    super();
    this.state = {code: '', html: '', htmlCode: '', stylesheet: '', path: '', fullpath: '', right: 'html'};
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
      
      let codeStylesheet = '';
      if (fullpath.endsWith('.html')) {
        const { html, stylesheet } = renderHtml(code);
        response = await fetch('http://127.0.0.1:1234' + stylesheet.content)     
        codeStylesheet = await response.text();

        this.setState({code, html, stylesheet: codeStylesheet, path: node.path, fullpath});
        
        return;
      }

      if (fullpath.endsWith('.css') || fullpath.endsWith('.scss')) {
        const htmlFile = '/videos' + code.split('\n')[0].split(' ')[2];
   
        if (htmlFile.endsWith('.html')) {
          response = await fetch('http://127.0.0.1:1234' + htmlFile)
          
          const htmlCode = await response.text();
          const { html } = renderHtml(htmlCode);
  
          this.setState({code, html, stylesheet: code, htmlCode, path: node.path, fullpath});

          return;
        }
        this.setState({code, html, stylesheet: code, htmlCode: '', path: node.path, fullpath});
      }
    }
  }

  getLanguage(filename) {
    if ( ! filename ) return '';        
    if (filename.endsWith('.html')) return 'html'
    if (filename.endsWith('.css')) return 'css'
    if (filename.endsWith('.javascript')) return 'javascript'

    return '';
  }  

  handleSearchBarHtml() {
    this.setState({right: 'html'})
  }

  render() {
    const { node, options, views, onSearchBarChange, onSearchBarHtmlIcon} = this.props;

    return (        
      <div className="main">            
        <SearchBar 
          node={node}
          options={options} 
          onSearchBarChange={onSearchBarChange}
          onSearchBarHtmlIcon={onSearchBarHtmlIcon}
        />
        <div className="code-note-container">
          <SplitPane split="vertical" minSize={50} defaultSize={800} pane2Style={{overflow: "auto"}}>
            <Coder code={this.state.code} language={this.getLanguage(node.path)}/>
            <MainRightSide 
              code={this.state.code}
              html={this.state.html}
              htmlCode={this.state.htmlCode}
              stylesheet={this.state.stylesheet}
              fullpath={this.state.fullpath}
              language={this.getLanguage(node.path)}
              views={views} 
              node={node}
            />
            {/* <Note html={this.state.html} stylesheet={this.state.stylesheet} fullpath={this.state.fullpath}/> */}
            {/* <Coder code={this.state.code} language={this.getLanguage(node.path)}/> */}
          </SplitPane>
        </div>        
      </div>
    );
  }
}

export default Main;
 