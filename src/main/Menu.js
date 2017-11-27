import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuIcon from "../assets/icons/MenuIcon";
import { colors } from "../themes/appTheme";

class Menu extends Component {

  static propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    onMainMenuToggle: PropTypes.func.isRequired
  };

  render() {
    const { onMainMenuToggle } = this.props;

    return (
      <div>
        {<MenuIcon
          color={colors.blue}
          onClick={onMainMenuToggle}
        />}
      </div>
    );
  }
}

export default Menu;
