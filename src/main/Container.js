import React from "react";
import Navigation from "./navigation/Navigation";
import MovieList from "./MovieList";
import "./Container.css";

class Container extends React.Component {
  state = {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env
      .REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    page: 1
  };

  componentDidMount() {
    const params = JSON.parse(localStorage.getItem("sweetpumpkins.params"));
    const page = JSON.parse(localStorage.getItem("sweetpumpkins.page"));

    if (params) {
      this.setUrl(params);
    }
    if (page) {
      this.setState({ page });
    }
  }

  saveParams = params => {
    localStorage.setItem("sweetpumpkins.params", JSON.stringify(params));
  };

  setUrl = ({ genreId, productionYear, rating, runtime }) => {
    const url =
      `https://api.themoviedb.org/3/discover/movie?` +
      `api_key=${process.env.REACT_APP_TMDB_KEY}&` +
      `language=en-US&sort_by=popularity.desc&` +
      `with_genres=${genreId}&` +
      `primary_release_date.gte=${productionYear.min}-01-01&` +
      `primary_release_date.lte=${productionYear.max}-12-31&` +
      `vote_average.gte=${rating.min}&` +
      `vote_average.lte=${rating.max}&` +
      `with_runtime.gte=${runtime.min}&` +
      `with_runtime.lte=${runtime.max}&`;

    this.setState({ url, page: 1 });
  };

  onSearchClick = params => {
    this.setUrl(params);
    this.saveParams(params);
  };

  getUrl = () => this.state.url + `page=${this.state.page}`;

  onPageChange = direction => {
    console.log(`this.state.page`, this.state.page);
    const newPage = this.state.page + direction;
    if (newPage > 0) {
      this.setState({ page: newPage });
      localStorage.setItem("sweetpumpkins.page", newPage);
    }
  };

  onPreviousPage = () => this.onPageChange(-1);
  onNextPage = () => this.onPageChange(1);

  render() {
    return (
      <section className="container">
        <Navigation setUrl={this.onSearchClick} />
        <MovieList
          url={this.getUrl()}
          onPreviousPage={this.onPreviousPage}
          onNextPage={this.onNextPage}
          page={this.state.page}
        />
      </section>
    );
  }
}

export default Container;
