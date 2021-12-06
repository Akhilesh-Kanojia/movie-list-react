import React, { Component } from "react";
import Image404 from './404.png';

export class MovieNotFound extends Component {
    render() {
        return (
            <div className="text-center col-md-12 notFound">
                <img src={Image404}/>
            </div>
        )
    }
}



export default MovieNotFound