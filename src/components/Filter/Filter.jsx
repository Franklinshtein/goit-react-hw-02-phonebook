import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <input
      type="text"
      name="filter"
      placeholder="Search contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;
