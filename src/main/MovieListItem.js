import React from "react";

const MovieListItem = ({ movie }) => (
  <li className="movie">
    <img src={movie.imgUrl} />
    <span>{movie.title}</span>
  </li>
);

export default MovieListItem;
