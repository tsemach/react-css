import * as React from 'react';
import Prism from "prismjs";

import "./prism/prism-default.css";
import './Coder.scss';

// from: 
//    https://medium.com/get-it-working/get-prismjs-working-in-react-a6d989e59290
//    https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript

class Coder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const {code, language}  = this.props

    console.log("Coder: render is called, code.length=", code ? code.length: 'undefined');
    return (
      <div className="coder scrollable">
        <pre className="line-numbers">
          <code className="language-javascript">      
          {code}
          </code>
        </pre>        
      </div>    
    )}
}
export default Coder;

