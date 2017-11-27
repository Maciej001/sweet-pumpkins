import React from "react";
import './MovieListItem.css'

const MovieListItem = ({ movie }) => {
  const { title, poster_path } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

  return (
    <li className="movie">
      <img src={imgUrl} alt="" />
      <div className="movie-description">
        <h2>{title}</h2>
        <section className="movie-details">
          <div className="movie-year">
            <span className="title">Year</span>
            <span>2015</span>
          </div>
          <div className="movie-rating">
            <span className="title">Rating</span>
            <span>7.5</span>
          </div>
        </section>
      </div>
    </li>
  );
};

export default MovieListItem;
