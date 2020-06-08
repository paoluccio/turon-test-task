import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectMovieOverview,
  fetchMovieOverview
} from '../redux/moviesSlice';

export const useMovieOverview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Before useEffect runs, data for the last movie will be pulled from Redux
  const movie = useSelector(selectMovieOverview);

  // We can make sure that user selected a new movie by comparing
  // requested movie id in URL and id of the last movie stored in Redux.
  // If they are the same we can skip API call and render cached data.
  const shouldFetch = !movie || Number(id) !== movie.id;

  useEffect(() => {
    shouldFetch && dispatch(fetchMovieOverview(id));
  }, [shouldFetch, dispatch, id]);

  // shouldFetch === true - we return null and wait for the new movie 
  // shouldFetch === false - we return cached movie from Redux and skip API call
  return shouldFetch ? null : movie;
};