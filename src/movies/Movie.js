import React from "react";
import LoadingMovie from "./LoadingMovie";

import "./Movie.css";

class Movie extends React.Component {
  state = {
    movie: {},
    isLoading: true
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process
      .env.REACT_APP_TMDB_KEY}&language=en-US`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ movie: data, isLoading: false }))
      .catch(error => console.log("We have an error", error));
  }

  render() {
    const {
      title,
      backdrop_path,
      release_date,
      genres,
      overview,
      vote_average,
      runtime
    } = this.state.movie;

    const releaseYear = release_date ? release_date.substring(0, 4) : 0;
    const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
    const backdropStyle = {
      backgroundImage: `url(${imgUrl})`
    };

    return (
      <div>
        {this.state.isLoading ? (
          <LoadingMovie />
        ) : (
          <div className="movie-page">
            <div className="movie-backdrop" style={backdropStyle} />
            <div className="movie-details">
              <h1>
                {title}
                <span>({releaseYear})</span>
              </h1>
              <section className="genres">
                {genres.map((genre, index) => (
                  <div key={genre.id}>
                    <span>{genre.name}</span>
                    {index < genres.length - 1 && (
                      <span className="separator">|</span>
                    )}
                  </div>
                ))}
              </section>
              <h5>
                Rating:
                <span>{vote_average}</span>
              </h5>
              <h5>
                Runtime:
                <span>{`${runtime} min`}</span>
              </h5>
              <h4>Overview</h4>
              <p>{overview}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Movie;
