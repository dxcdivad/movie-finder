import Detail from "./Detail";
import { connect } from 'react-redux';

function mapStoreToProps(store) {
  return {
    title: store.form.data.Title,
    year: store.form.data.Year,
    plot: store.form.data.Plot,
    poster: store.form.data.Poster,
    movieId: store.form.data.imdbID,
    runtime: store.form.data.Runtime,
    genre: store.form.data.Genre,
    actors: store.form.data.Actors,
    imdb: store.form.data.imdbRating,
    rated: store.form.data.Rated,
    director: store.form.data.Director,
    awards: store.form.data.Awards

  };
}

export default connect(mapStoreToProps)(Detail);
