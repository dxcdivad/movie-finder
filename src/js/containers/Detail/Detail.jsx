import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Detail extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { title, year, plot, poster, error, movieId, runtime, genre, actors, imdb, rated, director, awards } = this.props;
    const moreInfo = `/movie/${movieId}`

    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <div className="badge badge-success" id="year">Released: {year}</div>
              <div className="badge badge-success">{rated}</div>
              <div className="badge badge-success">Runtime: {runtime}</div>
              <hr />
            <div className="card-text"><strong>IMDB rating:</strong> {imdb}</div>
            <div className="card-text"><strong>Director:</strong> {director}</div>
            <div className="card-text"><strong>Actors:</strong> {actors}</div>
            <br />
            <div className="card-text">{plot}</div>
            <br />
            <div className="card-text">{awards}</div>
            </div>
            <br />
            <div className="badge badge-success">{genre}</div>

          </div>
        </div>
        <div className="col-lg-6">
          <img id="detailimg" src={poster} />
        </div>
      </div>
    )
  }
}