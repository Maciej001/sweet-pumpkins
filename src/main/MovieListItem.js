import React from "react";

const MovieListItem = ({ movie }) => {
  const { title, poster_path } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

  return (
    <li className="movie">
      <img src={imgUrl} alt="" />
      <span>{title}</span>
    </li>
  );
};

export default MovieListItem;
