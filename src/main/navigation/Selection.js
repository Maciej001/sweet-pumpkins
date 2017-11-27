import React from 'react';

class Selection extends React.Component {
  state = {
    value: null
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.onChange}>
        <option value="comedy">Comedy</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
      </select>
    )
  }
}

export default Selection;
