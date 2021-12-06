import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from '../home/SearchForm';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <a className="navbar-brand" href="#"><i className="fa fa-film"></i></a>
                <div id="navbarNav">
                   <SearchForm />
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;