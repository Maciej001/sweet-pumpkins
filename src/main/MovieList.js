import React from "react";
import MovieListItem from "./MovieListItem";
import "./MovieList.css";
import Button from "../components/Button";
import ButtonRow from "../components/ButtonRow";

class MovieList extends React.Component {
  state = {
    movies: []
  };

  storeMovies = data => {
    const movies = data.results.map(result => {
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
    const isPreviousActive = this.page > 1;
    const isNextActive =
      this.state.movies.length && this.state.movies.length === 20;

    return (
      <div>
        <ul className="movies">
          {this.state.movies.map(movie => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </ul>
        <ButtonRow>
          <Button
            onClick={isPreviousActive ? this.props.onPreviousPage : null}
            isActive={isPreviousActive}
          >
            Previous
          </Button>
          <span className="page-number">{`Page ${this.props.page}`}</span>
          <Button
            onClick={isNextActive ? this.props.onNextPage : null}
            isActive={isNextActive}
          >
            Next
          </Button>
        </ButtonRow>
      </div>
    );
  }
}

export default MovieList;
