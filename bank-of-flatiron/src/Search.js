import React from 'react';

const Search = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input className='search'
        type="text"
        placeholder="Search Transaction"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;