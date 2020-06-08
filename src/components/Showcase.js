import React from 'react';

import Pagination from './Pagination';
import MoviesList from './MoviesList';

const Showcase = () => (
  <React.Fragment>
    <Pagination />
    <MoviesList />
    <Pagination />
  </React.Fragment>
);

export default Showcase;