import React from 'react';
import { Link } from 'react-router-dom';

import { useMoviesList } from '../hooks/useMoviesList';

const MoviesList = () => {
  const movies = useMoviesList();

  return (
    <div className='row'>
      {movies.map(({ id, title, year, poster, isHD }) => (
        <div key={id} className='col-lg-2 col-md-3 col-sm-4 col-6 mb-3'>
          <div className='movie-card'>
            <Link to={`/movie/${id}`}>
              <img src={poster} className='poster poster-hover' alt='movie' />
            </Link>
            <p className='movie-card-title'>{title}</p>
            <p className='movie-card-year'>{year}</p>
            {isHD && <span className='hd-badge'>hd</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;