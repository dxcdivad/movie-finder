import SearchForm from "./SearchForm";
import { connect } from 'react-redux';

function mapStoreToProps(store) {
  return {
    movie: store.form.movie,
    data: store.form.data
  };
}

export default connect(mapStoreToProps)(SearchForm);
