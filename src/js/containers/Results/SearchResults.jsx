import React from 'react';
import {
  HashRouter as Router,
  Link,
  Route
} from 'react-router-dom';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, year, plot, poster, error, movieId } = this.props;
    const moreInfo = `/movie/${movieId}`

    if (title) {
      return (
          <div className="card">
            <div className="row">
              <div className="col-lg-8">
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <div className="badge badge-success" id="year">Released: {year}</div>
                  <hr />
                  <div className="card-text" id="desc">{plot}</div>
                </div>
                <Link to={moreInfo}>
                  <button id="moreInfo" className="btn btn-success">More Information</button>
                </Link>
              </div>
              <div className="col-lg-4">
                <img id="resultimg" src={poster} />
              </div>
            </div>
          </div>
      )
    }
    if (error) {
      return (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{error}</h4>
            <p>Please search another movie.</p>
          </div>
        </div>
      )
    }

    else {
      return null;
    }
  }
}

export default SearchResults;