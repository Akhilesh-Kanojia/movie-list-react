import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie, setLoading } from "../../actions/searchAction";
import Spinner from "../Layout/Spinner";
import { Link } from "react-router-dom";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { movie, loading } = this.props;
    let movieInfo = (
      <React.Fragment>
        <div className="container mt-2">
          <div className="row back">
            <Link to="/" className="back-search">
              <i className="fa fa-chevron-left" /> Back To Search
            </Link>
          </div>
          <div className="row">
            <div className="card card-body col-md-4">
              <img src={movie.Poster} className="thumbnail" alt="Poster" />
            </div>
            <div className="col-md-8">
              <h2 className="mb-4">{movie.Title}</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Genre: </strong> {movie.Genre}
                </li>
                <li className="list-group-item">
                  <strong>Released: </strong> {movie.Released}
                </li>
                <li className="list-group-item">
                  <strong>Rated: </strong> {movie.Rated}
                </li>
                <li className="list-group-item">
                  <strong>Director: </strong> {movie.Director}
                </li>
                <li className="list-group-item">
                  <strong>Actor: </strong> {movie.Actors}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    let content = loading ? <Spinner /> : movieInfo;
    return <div className="movieInfo">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.finalMovies.loading,
  movie: state.finalMovies.movie,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
