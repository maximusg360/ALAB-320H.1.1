import React from 'react';

function SearchBar({ onSearch, onSort }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search employees..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="role">Role</option>
      </select>
    </div>
  );
}

export default SearchBar;