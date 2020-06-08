import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { selectPagesCount } from '../redux/moviesSlice';

const Pagination = () => {
  const { page } = useParams();
  const history = useHistory();
  const pagesCount = useSelector(selectPagesCount);

  const handlePageChange = ({ selected }) => {
    history.push(`/page/${selected + 1}`);
  };

  return (
    <ReactPaginate
      forcePage={(page && !isNaN(page)) ? Number(page) - 1 : 0}
      pageCount={pagesCount}
      onPageChange={handlePageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      previousLabel={String.fromCodePoint(10094)}
      previousClassName='left-arrow'
      nextLabel={String.fromCodePoint(10095)}
      nextClassName='right-arrow'
      breakClassName='ellipsis'
      containerClassName='pagination'
      pageLinkClassName='page-link'
      activeClassName='active-page'
    />
  );
};

export default Pagination;