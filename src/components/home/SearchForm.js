import React, { Component } from 'react';
import {connect} from 'react-redux';
import { searchMovie, fetchMovies, setLoading } from '../../actions/searchAction';

class SearchForm extends Component {

    onChange = e =>{
      this.props.searchMovie(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }

    render() {
        return (
                <div className="input-group rounded d-flex justify-content-end">
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input type="search" name="searchText" className="form-control input" placeholder="Search Movies, TV Series.." aria-label="Search"
                            aria-describedby="search-addon"
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-default border-0" id="search-addon">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = state =>({
    text: state.finalMovies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm);