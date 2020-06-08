import { combineReducers } from '@reduxjs/toolkit';

import moviesReducer from './moviesSlice';

export default combineReducers({
  movies: moviesReducer
});