import React from "react";
import Navigation from './navigation/Navigation'
import MovieList from "./MovieList";
import './Container.css';

const Container = () => (
  <section className="container">
    <Navigation />
    <MovieList />
  </section>
);

export default Container;
