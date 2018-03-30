import SearchResults from "./SearchResults";
import { connect } from 'react-redux';

function mapStoreToProps(store) {
  return {
    title: store.form.data.Title,
    year: store.form.data.Year,
    plot: store.form.data.Plot,
    poster: store.form.data.Poster,
    error: store.form.data.Error,
    movieId: store.form.data.imdbID
  };
}

export default connect(mapStoreToProps)(SearchResults);