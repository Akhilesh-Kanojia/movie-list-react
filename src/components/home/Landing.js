import React, { Component } from "react";
import { connect } from "react-redux";
import MoviesContainer from "./MoviesContainer";
import Spinner from "../Layout/Spinner";

class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container-fluid">
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.finalMovies.loading,
  };
};

export default connect(mapStateToProps)(Landing);
