export function addMovieFavorite(payload) {
    return { type: 'ADD_MOVIE_FAVORITE', payload };
  }
               
export function getMovies(titulo) {
  console.log(1)
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=20dac387&s=" + titulo + '&type=movie')
        .then(response => response.json())
        .then(json => {
          dispatch({ type: 'GET_MOVIES', payload: json });
        });
    };
  }

 export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch("https://www.omdbapi.com/?apikey=20dac387&i=" + id+'&plot=full')
          .then(response => response.json())
          .then(json => {
            dispatch({ type: 'GET_MOVIE_DETAIL', payload: json });
          });
      };
 } ;

 export function removeMovieFavorite(id) {
    return { type: 'REMOVE_MOVIE_FAVORITE', payload: id };
 }