import React from 'react';
import SearchForm from './Search/';
import SearchResults from './Results/';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <SearchForm />
        <hr />
        <SearchResults />
      </div>
    )
  }
}

export default MovieSearchContainer;