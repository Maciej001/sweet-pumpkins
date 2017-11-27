import React from 'react';
import MovieListItem from "./MovieListItem";
import "./MovieList.css";

class MovieList extends React.Component {
  state = {
    movies: []
  }

  storeMovies = data => {
    const movies = data.results.map( result => {
      const  { vote_count, id, genre_ids, poster_path, title, vote_average } = result;
      return { vote_count, id, genre_ids, poster_path, title, vote_average };
    });

    this.setState({ movies })
  }
  componentDidMount() {
    const Url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    fetch(Url)
      .then(response => response.json())
      .then(data => this.storeMovies(data))
      .catch(error => console.log("We have an error", error))
  }

  render() {
    return (
      <ul className="movies">
        {this.state.movies.map(movie =>
          <MovieListItem key={movie.id} movie={movie} />
        )}
      </ul>
    )
  }
}

export default MovieList;
