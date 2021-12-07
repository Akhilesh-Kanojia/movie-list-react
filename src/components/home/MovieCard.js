import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="col-md-3 mb-3 mt-3">
                <div className="card card-body bg-dark text-center h-100 d-flex flex-column flex-grow-1">
                    <img src={movie.Poster} className="card-img-top" alt="Movie Cover" />
                    <div className="content-wraper">
                        <h5 className="text-light card-title">{movie.Title} - {movie.Year}</h5>
                        <Link className="btn btn-primary" to={`/movie/${movie.imdbID}`}>Movie Detail <i className="fa fa-chevron-right" /></Link>
                    </div>
                </div>
            </div>
        )
    }
}



export default MovieCard