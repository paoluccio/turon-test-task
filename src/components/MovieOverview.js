import React from 'react';
import parseHTML from 'html-react-parser';

import { useMovieOverview } from '../hooks/useMovieOverview';
import VideoPlayer from './VideoPlayer';

const MovieOverview = () => {
  const movie = useMovieOverview();

  if (!movie) return null;

  const {
    poster,
    title,
    year,
    isHD,
    countries,
    genres,
    description,
    actors,
    directors
  } = movie;

  return (
    <React.Fragment>
      <div className='row mb-2 justify-content-center'>
        <div className='col-md-3 col-6'>
          <div className='movie'>
            <img src={poster} className='poster' alt='movie' />
            <h2>{title}</h2>
            <h3>{year}</h3>
            {isHD && <span className='hd-badge'>hd</span>}
          </div>
        </div>
        <div className='col-md-9 col-12'>
          <VideoPlayer />
        </div>
      </div>
      <div className='movie-details'>
        <div>
          <span>Страна: </span>
          {countries}
        </div>
        <div>
          <span>Жанр: </span>
          {genres}
        </div>
        <div>
          <span>Описание: </span>
          {parseHTML(description)}
        </div>
        {actors.length > 0 && (
          <div>
            <span>В ролях: </span>
            {actors.join(', ')}
          </div>
        )}
        {directors.length > 0 && (
          <div>
            <span>Режиссеры: </span>
            {directors.join(', ')}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MovieOverview;