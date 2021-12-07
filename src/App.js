import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact component={Landing} path='/' />
            <Route exact component={Movie} path='/movie/:id' />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
