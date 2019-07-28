import * as React from 'react';
import Select from 'react-select';

import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight, FaHtml5, FaReadme, FaCode, FaRegBell } from 'react-icons/fa';
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

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];

    const colorLanuch = node.path ? "rgb(11, 11, 11)" : "rgb(211, 211, 211)";

    console.log("SEARCHBAR: node.path =", node.path)            
    return (          
      <React.Fragment>
        <div className="select-container">
          <Select className="select" options={options}/>
        </div>

        <div className="searchbar">
          <div className="select-placeholder">
          </div>
          <div className="toolbar">     
            <MdLaunch
              color={colorLanuch}
              size={32}
              onClick={() => this.handleLaunch(node)}
            />
          </div>
        </div>
      </React.Fragment>
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