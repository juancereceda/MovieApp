import React, {Component}from 'react';
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import appLogo from '../../clapperboard.png';
import home from '../../home.png';
import fav from '../../star.png'
import './Navbar.css';
import Lupa from '../../lupa.png';
import {addMovieFavorite,getMovies,removeMovieFavorite} from '../../actions/index';


export  class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
    
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.title);   
    this.props.getMovies(this.state.title);
  }
    

    render() {
        const { title } = this.state;
        return (
            <header className="navbar">
            <div className='logoapp'>
                <img id="logoHenry" src={appLogo} width="15" height="30" className="d-inline-block align-top" alt="" />
                <h1>MovieApp</h1>
            </div>
          <form  className='searchBar' onSubmit={(e) => this.handleSubmit(e)}>
              <button className='submitBtn' type="submit">
                <Link to='/search'>
              <img src={Lupa} width='30' heigth='30'/>
              </Link>
              </button>
        
            <input className='inputSearch'
              autoComplete="off"
              id='title'
              value={title}
              onChange={(e) => this.handleChange(e)}
              placeholder='Search movie...' type="text"/>
        </form>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >
                            <img src={home} width='30' heigth='30'/>
                        </NavLink>
                        <NavLink to="/favs" ><img src={fav} width='30' height='30'/></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
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
  )(NavBar);