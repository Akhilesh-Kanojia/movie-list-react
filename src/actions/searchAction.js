import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';
import {APIKeys} from '../APIKeys';

export const searchMovie = text => dispatch =>{
   debugger
     dispatch({
         type: SEARCH_MOVIE,
         payload: text
     });
};

export const fetchMovies = text => dispatch =>{
   debugger
   axios.get(`http://www.omdbapi.com/?apikey=${APIKeys}&s=${text}`)
   .then(response => dispatch({
      type: FETCH_MOVIES,
      payload: response.data
   }))
   .catch(error => console.log(error))
}

export const fetchMovie = id => dispatch =>{
   axios.get(`http://www.omdbapi.com/?apikey=${APIKeys}&i=${id}`)
   .then(response => dispatch({
      type: FETCH_MOVIE,
      payload: response.data
   }))
   .catch(error => console.log(error))
}

export const setLoading = ()=>{
   return({
      type: LOADING
   })
}