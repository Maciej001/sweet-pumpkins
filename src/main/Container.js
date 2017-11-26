import React from "react";
import Subscribe from "./Subscribe";
import MovieList from "./MovieList";

const Container = () => (
  <section>
    <h1>Sweet Pumpkins</h1>
    <h2>The easiest way to find movies on the web</h2>
    <Subscribe />
    <MovieList />
  </section>
);

export default Container;
