import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {addMovieFavorite,getMovies,removeMovieFavorite,getMovieDetail} from '../../actions/index'
import './Home.css';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div className='contenedor'>
          <div className='title'>
        <h1>Welcome to Juan Martin's MovieApp!</h1>
        <p>Hi there! My name is Juan Martín and this is my MovieApp. Here you will be able to access to detailed information about your favorite movies. You can also fav the movies you like in order to add them as your favorite movies, or make your personalized watchlist!</p>
          </div>   
          <img src={'https://www.flaticon.es/svg/vstatic/svg/3439/3439699.svg?token=exp=1620860430~hmac=2404fe7f5b67ffddb41dc22cff4e3ef0'} height='120' width='120'/>
      </div>
    );
  }
}
