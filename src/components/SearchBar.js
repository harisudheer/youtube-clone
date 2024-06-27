import React from 'react';

const SearchBar = () => {
    // Define state for search query
    const [query, setQuery] = React.useState('');

    const handleSearch = () => {
        // Fetch videos based on search query
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search videos..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
