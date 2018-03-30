import React, { Component } from 'react';
import { getMovie, updateSearchInput } from './formActions';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

  this.handleGetMovie = this.handleGetMovie.bind(this);
  this.handleSearchInput = this.handleSearchInput.bind(this);
  }



  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchInput(value));
  }

  

  handleGetMovie(e) {
    e.preventDefault();
    const { movie, dispatch } = this.props;
    dispatch(getMovie(movie));
  }




  render() {
    const { movie } = this.props;

    return (
      <form onSubmit={this.handleGetMovie}>
        <div className="input-group">
          <input type="text"
            className="form-control"
            id="movieSearchInput"
            placeholder="Search a movie!"
            value={ movie }
            onChange={this.handleSearchInput}>
          </input>
          <div className="input-group-btn">
            <button
              type="button"
              className="btn btn-success"
              id="movieSearchButton"
              onClick={this.handleGetMovie}>
              Go!
            </button>
          </div>
        </div>
      </form>
    )
  }
}
