import * as React from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight, FaHtml5, FaReadme, FaCode } from 'react-icons/fa';
import { openInNewTab } from '../../common/utils';
import { MdLaunch } from 'react-icons/md';

import './SearchBar.scss';

class SearchBar extends React.Component {  
  
  constructor(props) {
    super(props)
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLaunch = this.handleLaunch.bind(this);
  }

  handleInputChange(node) {
    console.log(node);
  }

  handleLaunch(node) {
    if (node.path) {
      openInNewTab('/videos' + node.path)
    }
  }

  render() { 
    const { node } = this.props; 

    console.log("SEARCHBAR: node.path =", node.path)            
    return (          
      <div className="searchbar">
        {/* <div className="searchbar"> */}
          <input
            placeholder="Search for.."
            onChange={this.handleInputChange}
            defaultValue={node ? node.path : ''}
          />
        {/* </div> */}
        <div className="toolbar">     
          <MdLaunch
            size={32}
            onClick={() => this.handleLaunch(node)}
          />
        </div>
      </div>   
    );
  }
}
 
export default SearchBar;

{/* 

      <div className="search-bar">
        <form>
          <div className="form-row">
            <input 
              placeholder="Search for..."
              // value={'sdvsdv'}
              onChange={this.handleInputChange}
            />
          </div>
        </form>      
      </div> */}