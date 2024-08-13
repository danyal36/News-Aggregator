import React, { useState, useEffect } from 'react';
import useFetchArticles from './hooks/useFetchArticles';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('bitcoin');
  const [preferences, setPreferences] = useState({
    sources: [],
    categories: [],
    authors: []
  });
  const { articles, totalPages, error } = useFetchArticles(searchQuery, currentPage, preferences);

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePreferencesChange = (newPreferences) => {
    setPreferences(newPreferences);
  };

  // Update page if total pages change
  useEffect(() => {
    if (currentPage > totalPages && totalPages != 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className='w-full'>
          <SearchBar onSearch={handleSearch} preferences={preferences} handlePreferencesChange={handlePageChange} />
        </div>
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <>
            <ArticleList articles={articles} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </>
        )}
      </div>
    </>
  );
};

export default App;