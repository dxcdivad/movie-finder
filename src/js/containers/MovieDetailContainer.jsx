import React from 'react';
import Detail from './Detail/';
import { Link } from 'react-router-dom';



class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Link to="/">
          <div className="input-group-btn">
            <button
              type="button"
              className="btn btn-success"
            >
              Search another movie
            </button>
          </div>
        </Link>
        <hr />
        <Detail />
        {/* <div className="card">
          <p>Viewing movie {this.props.match.params.id}</p>
        </div> */}

      </div>
    )
  }
}

export default MovieDetailContainer;