import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { query } from 'redux/sliceFilter';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(query(evt.currentTarget.value));
  };

  return (
    <div className='filter'>
      <label htmlFor="filter">Filter contacts: </label>
      <input
        className='filter-input'
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

export default Filter;