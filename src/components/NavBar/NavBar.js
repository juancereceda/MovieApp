import React, { useState } from "react";
import { NavLink, Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import appLogo from "../../popcorn.png";
import home from "../../home.png";
import fav from "../../star.png";
import "./Navbar.css";
import Lupa from "../../lupa.png";
import {
  addMovieFavorite,
  getMovies,
  removeMovieFavorite,
} from "../../actions/index";

export var titulo = "";

export function NavBar(props) {
  const [state, setState] = useState({
    title: "",
  });

  const history = useHistory();

  function handleChange(event) {
    titulo = event.target.value;
    setState({ title: event.target.value });
  }

  let numPage = 1;

  function handleSubmit(event) {
    event.preventDefault();
    props.getMovies(state.title, numPage);
    history.push(`/search/${numPage}`);
  }

  const title = state.title;

  return (
    <header className="navbar">
      <div className="logoapp">
        <NavLink exact to="/">
          <img
            id="logoHenry"
            src={appLogo}
            width="15"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </NavLink>
        <h1>MovieApp</h1>
      </div>
      <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
        <button className="submitBtn" type="submit">
          <img src={Lupa} width="30" heigth="30" />
        </button>

        <input
          className="inputSearch"
          autoComplete="off"
          id="title"
          value={title}
          onChange={(e) => handleChange(e)}
          placeholder="Search movie..."
          type="text"
        />
      </form>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              <img src={home} width="30" heigth="30" />
            </NavLink>
            <NavLink to="/favs">
              <img src={fav} width="30" height="30" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    favorites: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
