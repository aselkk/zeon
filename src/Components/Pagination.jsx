import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({pageCount, changePage}) => {
    return (
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'prevBttn'}
                nextLinkClassName={'nextBttn'}
                activeClassName={'paginationActive'}
            />
    );
};

export default Pagination;