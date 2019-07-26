import * as React from 'react';

import './SearchBar.scss';

class SearchBar extends React.Component {  
  
  constructor(props) {
    super(props)
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target.value);
  }

  render() { 
    const filteredData = [
      'bash',
      'docker',
      'typescript'
    ];

    return (          
      <div className="searchbar-container">
        <div className="searchbar">
          <input               
            placeholder="Search for.."
            onChange={this.handleInputChange}
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