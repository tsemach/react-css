import * as React from 'react';

import SearchBarPropsType from './types/SearchBarProps.type';
import SearchBarStateType from './types/SearchState.type';
import './SearchBar.scss';

class SearchBar extends React.Component {  
  
  constructor(props) {
    super(props)
  }

  // handleInputChange = (event) => {
  //   console.log(event.target.value);
  // }

  render() { 
    const filteredData = [
      'bash',
      'docker',
      'typescript'
    ];

    return (          
      <div className="searchbar-container">
        <div className="searchbar">
          Example-05: SEARCH-BAR            
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