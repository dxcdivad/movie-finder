import axios from 'axios';

const API_KEY = "1aff3b56";
const ROOT_URL = `http://www.omdbapi.com/`



export function updateSearchInput(movie) {

  return  {
    type: 'UPDATE_SEARCH_INPUT',
    payload: { movie }
  }

}

export function getMovie(movie) {
  const url = `${ROOT_URL}?t=${movie}&apikey=${API_KEY}`;
  const request = axios.get(url);

  console.log(request);
  
  return {
    type: 'GET_MOVIE',
    payload: request
  };
}


