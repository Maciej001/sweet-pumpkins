import React from 'react';
import "./Navigation.css";
import Selection from "./Selection"

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Selection />
      </div>
    )
  }
}

export default Navigation;
