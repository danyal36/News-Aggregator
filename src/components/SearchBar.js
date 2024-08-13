import React, { useState } from 'react';
import PreferencesForm from './PreferencesForm';
import Dropdown from './Dropdown';

const SearchBar = ({ onSearch, preferences, handlePreferencesChange }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for articles..."
                className="flex-grow p-2 border rounded-md"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md mr-0.5">
                Search
            </button>
            <Dropdown>
                <PreferencesForm preferences={preferences} onChange={handlePreferencesChange} />
            </Dropdown>
        </form>
    );
};

export default SearchBar;