import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite,getMovies,removeMovieFavorite} from '../../actions/index'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  
/*   addList(array) {
    removeChildren('#moviesList')
    for(let i=0;i<array.length;i++) {
      var moviesList = document.getElementById('moviesList');
      var nombre = document.createElement('li');  
      var fav = document.createElement('button');
      nombre.innerHTML = `<Link to=${`/movie/${array[i].imdbID}`}>${array[i].Title}</Link>`;
      fav.onclick=
      moviesList.append(nombre);
    }
  } */

  handleChange(event) {
    this.setState({ title: event.target.value });
    
  }

  handleSubmit(event) {
    event.preventDefault();
  /*   console.log(this.state.title);   */
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
    {/*     <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Pelicula:</label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form> */}
        <ul id='moviesList'>
          {this.props.movies && this.props.movies.map(movie => (
              <div className='movieCard' key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                <img className = 'poster' src={movie.Poster}/> 
                </Link>

              {this.props.favorites.indexOf(movie)=== -1?<button className='fav' onClick={() => this.props.addMovieFavorite(movie)}>☆</button>:<button className='fav' onClick={() => this.props.removeMovieFavorite(movie.imdbID)}>⭐</button>

              }
              </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    favorites: state.moviesFavourites,
    /* 
    detail: state.movieDetail */
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title)),
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
/* 
export default Buscador; */
