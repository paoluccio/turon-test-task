import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectMoviesList,
  fetchMoviesList,
  selectLastRequestedPage
} from '../redux/moviesSlice';

export const useMoviesList = () => {
  const { page = 1 } = useParams();
  const dispatch = useDispatch();

  // Before useEffect runs, data for the last movies list will be pulled from Redux
  const movies = useSelector(selectMoviesList);

  // Redux stores last requested page number as well
  const lastRequestedPage = useSelector(selectLastRequestedPage);

  // We can make sure that user selected a new page by comparing
  // currently requested page from URL and last requested page from Redux.
  // If they are the same we can skip API call and render cached data.
  const shouldFetch = Number(page) !== lastRequestedPage;

  useEffect(() => {
    shouldFetch && dispatch(fetchMoviesList(page));
  }, [shouldFetch, dispatch, page]);

  // shouldFetch === true - we fallback to empty array and wait for the new movies list
  // shouldFetch === false - we return cached movies list from Redux and skip API call
  return shouldFetch ? [] : movies;
};