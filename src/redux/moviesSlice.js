import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { MoviesAPI } from '../api/MoviesAPI';

// Async thunks
export const fetchMoviesList = createAsyncThunk(
  'movies/fetchMoviesList',
  async page => {
    try {
      return await MoviesAPI.fetchMoviesList(page);
    } catch (error) {
      throw error;
    }
  }
);

export const fetchMovieOverview = createAsyncThunk(
  'movies/fetchMovieOverview',
  async id => {
    try {
      return await MoviesAPI.fetchMovieOverview(id);
    } catch (error) {
      throw error;
    }
  }
);

// State slice
const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    moviesList: [],
    movieOverview: null,
    lastRequestedPage: null,
    collectionSize: 0,
    maxPerPage: 0
  },
  extraReducers: {
    [fetchMoviesList.pending]: (state, action) => {
      const { arg: requestedPage } = action.meta;
      state.lastRequestedPage = Number(requestedPage);
      state.moviesList = [];
    },
    [fetchMoviesList.fulfilled]: (state, action) => {
      const { maxPerPage, collectionSize, moviesList } = action.payload;
      state.moviesList = moviesList;
      state.collectionSize = collectionSize;
      state.maxPerPage = maxPerPage;
    },
    [fetchMovieOverview.fulfilled]: (state, action) => {
      state.movieOverview = action.payload;
    }
  }
});

export default moviesSlice.reducer;

// Selectors
export const selectMoviesList = state => state.movies.moviesList;
export const selectLastRequestedPage = state => state.movies.lastRequestedPage;
export const selectMovieOverview = state => state.movies.movieOverview;

const selectCollectionSize = state => state.movies.collectionSize;
const selectMaxPerPage = state => state.movies.maxPerPage;

export const selectPagesCount = createSelector(
  [selectCollectionSize, selectMaxPerPage],
  (size, perPage) => Math.ceil(size / perPage)
);