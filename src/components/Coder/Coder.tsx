import * as React from 'react';
import Prism from "prismjs";

import CoderPropsType from './types/CoderProps.type';
import CoderStateType from './types/CoderState.type';

import "./prism/prism-default.css";
import './Coder.scss';

// from: 
//    https://medium.com/get-it-working/get-prismjs-working-in-react-a6d989e59290
//    https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript

class Coder extends React.Component<CoderPropsType, CoderStateType> {
  constructor(props: CoderPropsType) {
    super(props);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const {code, language}  = this.props

    return (
      <div className="coder">   
      <pre>
        <code className={language + " coder"}>
          {code}
        </code>
      </pre>
      {/* <pre className="line-numbers">
        <code className="language-javascript">      
          {`
            onSubmit(e) {
              e.preventDefault();
              const job = {
                title: 'Developer',
                company: 'Facebook' 
              };
            }
          `}
        </code>
      </pre>
      <pre>
        <code className="language-javascript">      
          {code}
        </code>
        </pre> */}
    </div>
    )}
}
export default Coder;

