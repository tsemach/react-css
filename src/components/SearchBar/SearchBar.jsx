import * as React from 'react';
import Select from 'react-select';

import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight, FaHtml5, FaReadme, FaCode, FaRegBell } from 'react-icons/fa';
import { openInNewTab } from '../../common/utils';
import { MdLaunch, MdCode } from 'react-icons/md';
import { IoLogoCss3 } from 'react-icons/io'

import './SearchBar.scss';

class SearchBar extends React.Component {  
  
  constructor(props) {
    super(props)
    
    this.handleLaunch = this.handleLaunch.bind(this);
  }

  handleLaunch(node) {
    if (node.path) {
      openInNewTab(Config.getUrlPath + '/videos' + node.path)
    }
  }      

  render() { 
    const { node, options, onSearchBarChange, onSearchBarHtmlIcon} = this.props; 
    
    const colorLanuch = node.path ? "rgb(128, 128, 128)" : "rgb(211, 211, 211)";
    const colorMdCode = node.path ? "rgb(128, 128, 128)" : "rgb(211, 211, 211)";
    
    return (          
      <React.Fragment>
        <div className="select-container">
          <Select 
            className="select" 
            options={options} 
            onChange={onSearchBarChange}
            value={options.filter(option => option.label === node.path)}
          />
        </div>

        <div className="searchbar">
          <div className="select-placeholder">
          </div>
          <div className="toolbar">
            <MdLaunch
              className="icons"
              color={colorLanuch}
              size={32}
              style={{padding: '10px'}}
              onClick={() => this.handleLaunch(node)}
            />
            <FaCode 
              className="icons"
              color={colorMdCode}
              size={32}
              style={{padding: '10px'}}
              onClick={() => onSearchBarHtmlIcon(node)}              
            />
            <IoLogoCss3 
              className="icons"
              color={colorMdCode}
              size={32}
              style={{padding: '10px'}}
              onClick={() => onSearchBarHtmlIcon(node)}
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