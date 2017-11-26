import React from 'react';
import MovieListItem from "./MovieListItem";

const movies = [
  {
    title: "Breaking Bad",
    imgUrl: "https://s3.eu-west-2.amazonaws.com/sweetpumpkins/movies-breaking-bad-300x450.jpg"
  },
  {
    title: "Narcos",
    imgUrl: "https://s3.eu-west-2.amazonaws.com/sweetpumpkins/movie-narcos-300x450.jpg"
  },
  {
    title: "Game of Thrones",
    imgUrl: "https://s3.eu-west-2.amazonaws.com/sweetpumpkins/movie-game-of-thrones-300x450.jpg"
  }
];

class MovieList extends React.Component {
  render() {
    return (
      <ul className="movies">
        {movies.map(movie =>
          <MovieListItem key={movie.title} movie={movie} />
        )}

      </ul>
    )
  }
}

export default MovieList;
