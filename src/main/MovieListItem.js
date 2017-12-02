import React from "react";
import { Link } from "react-router-dom";

import "./MovieListItem.css";

const MovieListItem = ({ movie }) => {
  const { id, title, poster_path, release_year, vote_average } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

  return (
    <li className="movie">
      <Link to={`/movies/${id}`}>
        <img src={imgUrl} alt="" />
        <div className="movie-description">
          <h2>{title}</h2>
          <section className="movie-details">
            <div className="movie-year">
              <span className="title">Year</span>
              <span>{release_year}</span>
            </div>
            <div className="movie-rating">
              <span className="title">Rating</span>
              <span>{vote_average}</span>
            </div>
          </section>
        </div>
      </Link>
    </li>
  );
};

export default MovieListItem;
