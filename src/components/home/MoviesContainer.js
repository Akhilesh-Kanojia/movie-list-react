import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import MovieNotFound from "./MovieNotFound";

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = "";
    content =
      movies.Response == "True" ? (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : movies.Response == "False" ? (
        <MovieNotFound />
      ) : null;
    return <div className="row movieWrapper">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.finalMovies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
