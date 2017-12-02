import React from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from "./Slider";
import SearchButton from "./SearchButton";

class Navigation extends React.Component {
  state = {
    genre: "Action",
    genres: [],
    productionYear: {
      label: "Year",
      min: 1990,
      max: 2017,
      step: 1,
      value: { min: 2000, max: 2017 }
    },
    rating: {
      label: "Rating",
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: "Runtime",
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    }
  };

  componentDidMount() {
    const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process
      .env.REACT_APP_TMDB_KEY}&language=en-US`;

    const params = JSON.parse(localStorage.getItem("sweetpumpkins.params"));
    const genreId = params ? params.genreId : null;

    fetch(genresURL)
      .then(response => response.json())
      .then(data => {
        this.setState({ genres: data.genres });
        if (genreId) {
          const genre = data.genres.find(genre => genre.id === genreId).name;
          this.setState({ genre });
        }
      })
      .catch(error => console.log(error));

    if (params) {
      this.setParams(params);
    }
  }

  setParams = params => {
    const { productionYear, rating, runtime } = params;
    this.setState({
      productionYear: {
        ...this.state.productionYear,
        value: productionYear
      },
      rating: {
        ...this.state.rating,
        value: rating
      },
      runtime: {
        ...this.state.runtime,
        value: runtime
      }
    });
  };

  onGenreChange = event => {
    this.setState({ genre: event.target.value });
  };

  onProductionYearChange = value => {
    this.setState({
      productionYear: {
        ...this.state.productionYear,
        value
      }
    });
  };

  onRatingChange = value => {
    this.setState({
      rating: {
        ...this.state.rating,
        value
      }
    });
  };

  onRuntimeChange = value => {
    this.setState({
      runtime: {
        ...this.state.runtime,
        value
      }
    });
  };

  onSearchButtonClick = () => {
    const selectedGenre = this.state.genres.find(
      genre => genre.name === this.state.genre
    );

    const genreId = selectedGenre.id;
    const productionYear = this.state.productionYear.value;
    const rating = this.state.rating.value;
    const runtime = this.state.runtime.value;

    this.props.setUrl({ genreId, productionYear, rating, runtime });
  };

  render() {
    return (
      <div className="navigation">
        <Selection
          genres={this.state.genres}
          genre={this.state.genre}
          onGenreChange={this.onGenreChange}
        />
        <Slider
          data={this.state.productionYear}
          onChange={this.onProductionYearChange}
        />
        <Slider data={this.state.rating} onChange={this.onRatingChange} />
        <Slider data={this.state.runtime} onChange={this.onRuntimeChange} />
        <SearchButton onClick={this.onSearchButtonClick} />
      </div>
    );
  }
}

export default Navigation;
