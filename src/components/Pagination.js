import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`p-2 bg-blue-500 text-white rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Previous
      </button>
      <span className="mx-2">Page {currentPage} of {totalPages}</span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`p-2 bg-blue-500 text-white rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;