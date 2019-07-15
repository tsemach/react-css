import * as React from 'react';

import SearchBarPropsType from './types/SearchBarProps.type';
import SearchBarStateType from './types/SearchState.type';
import './SearchBar.scss';

class SearchBar extends React.Component<SearchBarPropsType, SearchBarStateType> {  
  
  constructor(props: SearchBarPropsType) {
    super(props)
  }

  handleInputChange = (event: any) => {
    console.log(event.target.value);
  }

  render() { 
    const filteredData: any[] = [
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