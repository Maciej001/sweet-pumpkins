import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import Container from "./main/Container";
import Movie from "./movies/Movie";
import NotFound from "./NotFound";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Container} />
          <Route path="/movies/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
