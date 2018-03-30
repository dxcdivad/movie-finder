import { combineReducers } from 'redux';
import formReducer from './containers/Search/formReducer'


const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;