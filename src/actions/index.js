/* require("dotenv").config(); */
/* import dotenv from "dotenv";
dotenv.config(); */
const { REACT_APP_API_KEY } = process.env;

export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo, numPage) {
  return function (dispatch) {
    return fetch(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${titulo}&type=movie&page=${numPage}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&i=${id}&plot=full`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };
}

export function removeMovieFavorite(id) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
}
