import React from "react";
import MovieListItem from "./MovieListItem";
import "./MovieList.css";

class MovieList extends React.Component {
  state = {
    movies: []
  };

  storeMovies = data => {
    const movies = data.results.map(result => {
      console.log(`result`, result);
      const {
        vote_count,
        id,
        genre_ids,
        poster_path,
        title,
        release_date,
        vote_average
      } = result;
      const release_year = release_date.substring(0, 4);
      return {
        vote_count,
        id,
        genre_ids,
        poster_path,
        title,
        release_year,
        vote_average
      };
    });

    this.setState({ movies });
  };
  componentDidMount() {
    this.fetchMovies(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchMovies(nextProps.url);
  }

  fetchMovies = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.storeMovies(data))
      .catch(error => console.log("We have an error", error));
  };

  render() {
    return (
      <ul className="movies">
        {this.state.movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    );
  }
}

export default MovieList;
