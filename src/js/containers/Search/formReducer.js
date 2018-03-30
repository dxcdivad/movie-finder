const defaultState = {
  movie: '',
  data: ''
}


export default function formReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_INPUT': {

      return {
        ...state,
        movie: payload.movie
      };
    }


    case 'GET_MOVIE_FULFILLED': {


      return {
        ...state,
        data: payload.data
      };
    }

    default: {
      return state;
    }
  }
}