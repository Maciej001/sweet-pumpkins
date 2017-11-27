import React from 'react';
import "./Navigation.css";
import Selection from "./Selection"

class Navigation extends React.Component {
  state = {
    genre: ''
  }

  onGenreChange = event => {
    this.setState({ genre: event.target.value });
  }

  render() {
    return (
      <div className="navigation">
        <Selection
          genre={this.state.genre}
          onGenreChange={this.onGenreChange}
        />
      </div>
    )
  }
}

export default Navigation;
