import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { fetchGiphy } = props;
    const inputElement = event.currentTarget;
    const keyword = inputElement.value;
    fetchGiphy(`book ${keyword}`);
  };

  return (
    <input type="text" className="form-search form-control" onChange={handleChange} />
  );
};

export default SearchBar;
