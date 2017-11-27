import React from 'react';

const Selection = ({ genre, onGenreChange }) => (
  <select value={genre} onChange={onGenreChange}>
    <option value="comedy">Comedy</option>
    <option value="action">Action</option>
    <option value="drama">Drama</option>
  </select>
)

export default Selection;
